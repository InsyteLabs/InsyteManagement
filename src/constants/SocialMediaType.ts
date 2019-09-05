'use strict';

interface ISocialMediaType{
    [key: string]: any;
}

export const SocialMediaType: ISocialMediaType = {
    FACEBOOK:  'Facebook',
    TWITTER:   'Twitter',
    INSTAGRAM: 'Instagram',
    PINTEREST: 'Pinteres',
    SNAPCHAT:  'Snapchat',
    LINKEDIN:  'LinkedIn',
    YOUTUBE:   'YouTube',
    GITHUB:    'GitHub',
    GITLAB:    'GitLab'
};