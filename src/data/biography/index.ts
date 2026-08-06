import { educationList } from './education';
import { experienceList } from './experience';
import { expertiseList } from './expertise';
import { awards, interests, languages } from './extras';
import { biographyProfile } from './profile';
import { venturesList } from './ventures';

export const biographyData = {
    profile: biographyProfile,
    experienceList,
    educationList,
    expertiseList,
    venturesList,
    extras: {
        languages,
        interests,
        awards,
    },
};
