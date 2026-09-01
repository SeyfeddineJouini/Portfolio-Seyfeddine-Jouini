
import cv2
import numpy as np
from skimage.morphology import convex_hull_image
from scipy.ndimage import label

# === 1. Charger image ===
image = cv2.imread("image.png", 0)  # gris

# === 2. Binarisation (Otsu, marche CT + MR) ===
_, mask = cv2.threshold(image, 0, 1, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# === 3. Garder la plus grande composante (body) ===
lab, _ = label(mask)
sizes = np.bincount(lab.flat)
sizes[0] = 0  # ignore background
body = (lab == sizes.argmax())

# === 4. Convex Hull (reconstruit contour fermé) ===
hull = convex_hull_image(body)

# === 5. Extraire le contour ===
kernel = np.ones((3,3), np.uint8)
eroded = cv2.erode(hull.astype(np.uint8), kernel)
contour = hull.astype(np.uint8) - eroded

# === 6. Dessiner le contour sur l'image originale ===
image_color = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)

# mettre le contour en rouge
image_color[contour == 1] = [0, 0, 255]

# === 7. Affichage ===
cv2.imshow("Contour", image_color)
cv2.waitKey(0)
cv2.destroyAllWindows()
