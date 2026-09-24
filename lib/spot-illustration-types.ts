export type SpotIllustrationTopic='layers'|'bottom'|'structure'|'surf'|'fall'|'float'|'flow'|'pond';
export type SpotIllustration={
 slug:string;name:string;topic:SpotIllustrationTopic;context:string;localApproach:string[];
 method:{slug:string;name:string};fish:{slug:string;name:string}[];
 sources:{label:string;url:string}[];sourceCheckedAt?:string;
};
export type IllustrationLesson={title:string;labels:[string,string,string];steps:[string,string,string];checks:{when:string;action:string}[]};
