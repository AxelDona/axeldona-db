import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsProjectButton extends Schema.Component {
  collectionName: 'components_buttons_project_buttons';
  info: {
    displayName: 'button';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String & Attribute.Required;
    icon: Attribute.String;
  };
}

export interface YoutubeVideoYoutubeVideo extends Schema.Component {
  collectionName: 'components_youtube_video_youtube_videos';
  info: {
    displayName: 'youtubeVideo';
    icon: 'play';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    videoHeight: Attribute.Integer & Attribute.DefaultTo<315>;
    videoWidth: Attribute.Integer & Attribute.DefaultTo<560>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.project-button': ButtonsProjectButton;
      'youtube-video.youtube-video': YoutubeVideoYoutubeVideo;
    }
  }
}
