import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly additionalSections: ReadonlyArray<AdditionalSections>;
  readonly additionalSections_aggregated: ReadonlyArray<AdditionalSections_Aggregated>;
  readonly additionalSections_by_id: Maybe<AdditionalSections>;
  readonly additionalSections_by_version: Maybe<Version_AdditionalSections>;
  readonly goods: ReadonlyArray<Goods>;
  readonly goodsImg: ReadonlyArray<GoodsImg>;
  readonly goodsImg_aggregated: ReadonlyArray<GoodsImg_Aggregated>;
  readonly goodsImg_by_id: Maybe<GoodsImg>;
  readonly goodsImg_by_version: Maybe<Version_GoodsImg>;
  readonly goodsTwoImages: ReadonlyArray<GoodsTwoImages>;
  readonly goodsTwoImages_aggregated: ReadonlyArray<GoodsTwoImages_Aggregated>;
  readonly goodsTwoImages_by_id: Maybe<GoodsTwoImages>;
  readonly goodsTwoImages_by_version: Maybe<Version_GoodsTwoImages>;
  readonly goods_additionalSections: ReadonlyArray<Goods_AdditionalSections>;
  readonly goods_additionalSections_aggregated: ReadonlyArray<Goods_AdditionalSections_Aggregated>;
  readonly goods_additionalSections_by_id: Maybe<Goods_AdditionalSections>;
  readonly goods_additionalSections_by_version: Maybe<Version_Goods_AdditionalSections>;
  readonly goods_aggregated: ReadonlyArray<Goods_Aggregated>;
  readonly goods_by_id: Maybe<Goods>;
  readonly goods_by_version: Maybe<Version_Goods>;
  readonly goods_files: ReadonlyArray<Goods_Files>;
  readonly goods_files_aggregated: ReadonlyArray<Goods_Files_Aggregated>;
  readonly goods_files_by_id: Maybe<Goods_Files>;
  readonly goods_files_by_version: Maybe<Version_Goods_Files>;
  readonly goods_goods: ReadonlyArray<Goods_Goods>;
  readonly goods_goods_aggregated: ReadonlyArray<Goods_Goods_Aggregated>;
  readonly goods_goods_by_id: Maybe<Goods_Goods>;
  readonly goods_goods_by_version: Maybe<Version_Goods_Goods>;
  readonly goods_image_builder: ReadonlyArray<Goods_Image_Builder>;
  readonly goods_image_builder_aggregated: ReadonlyArray<Goods_Image_Builder_Aggregated>;
  readonly goods_image_builder_by_id: Maybe<Goods_Image_Builder>;
  readonly goods_image_builder_by_version: Maybe<Version_Goods_Image_Builder>;
  readonly homePage: Maybe<HomePage>;
  readonly homePage_by_version: Maybe<Version_HomePage>;
  readonly homePage_goods: ReadonlyArray<HomePage_Goods>;
  readonly homePage_goods_1: ReadonlyArray<HomePage_Goods_1>;
  readonly homePage_goods_1_aggregated: ReadonlyArray<HomePage_Goods_1_Aggregated>;
  readonly homePage_goods_1_by_id: Maybe<HomePage_Goods_1>;
  readonly homePage_goods_1_by_version: Maybe<Version_HomePage_Goods_1>;
  readonly homePage_goods_aggregated: ReadonlyArray<HomePage_Goods_Aggregated>;
  readonly homePage_goods_by_id: Maybe<HomePage_Goods>;
  readonly homePage_goods_by_version: Maybe<Version_HomePage_Goods>;
  readonly lookBook: ReadonlyArray<LookBook>;
  readonly lookBook_aggregated: ReadonlyArray<LookBook_Aggregated>;
  readonly lookBook_by_id: Maybe<LookBook>;
  readonly lookBook_by_version: Maybe<Version_LookBook>;
  readonly sectionsDirections: ReadonlyArray<SectionsDirections>;
  readonly sectionsDirections_aggregated: ReadonlyArray<SectionsDirections_Aggregated>;
  readonly sectionsDirections_by_id: Maybe<SectionsDirections>;
  readonly sectionsDirections_by_version: Maybe<Version_SectionsDirections>;
  readonly styleTips: ReadonlyArray<StyleTips>;
  readonly styleTips_aggregated: ReadonlyArray<StyleTips_Aggregated>;
  readonly styleTips_by_id: Maybe<StyleTips>;
  readonly styleTips_by_version: Maybe<Version_StyleTips>;
};


export type QueryAdditionalSectionsArgs = {
  filter: InputMaybe<AdditionalSections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdditionalSections_AggregatedArgs = {
  filter: InputMaybe<AdditionalSections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAdditionalSections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdditionalSections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoodsArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoodsImgArgs = {
  filter: InputMaybe<GoodsImg_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoodsImg_AggregatedArgs = {
  filter: InputMaybe<GoodsImg_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoodsImg_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoodsImg_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoodsTwoImagesArgs = {
  filter: InputMaybe<GoodsTwoImages_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoodsTwoImages_AggregatedArgs = {
  filter: InputMaybe<GoodsTwoImages_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoodsTwoImages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoodsTwoImages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoods_AdditionalSectionsArgs = {
  filter: InputMaybe<Goods_AdditionalSections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_AdditionalSections_AggregatedArgs = {
  filter: InputMaybe<Goods_AdditionalSections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_AdditionalSections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_AdditionalSections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoods_AggregatedArgs = {
  filter: InputMaybe<Goods_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoods_FilesArgs = {
  filter: InputMaybe<Goods_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Files_AggregatedArgs = {
  filter: InputMaybe<Goods_Files_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoods_GoodsArgs = {
  filter: InputMaybe<Goods_Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Goods_AggregatedArgs = {
  filter: InputMaybe<Goods_Goods_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Goods_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_Goods_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGoods_Image_BuilderArgs = {
  filter: InputMaybe<Goods_Image_Builder_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Image_Builder_AggregatedArgs = {
  filter: InputMaybe<Goods_Image_Builder_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_Image_Builder_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_Image_Builder_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHomePageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomePage_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHomePage_GoodsArgs = {
  filter: InputMaybe<HomePage_Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Goods_1Args = {
  filter: InputMaybe<HomePage_Goods_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Goods_1_AggregatedArgs = {
  filter: InputMaybe<HomePage_Goods_1_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Goods_1_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomePage_Goods_1_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHomePage_Goods_AggregatedArgs = {
  filter: InputMaybe<HomePage_Goods_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Goods_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomePage_Goods_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLookBookArgs = {
  filter: InputMaybe<LookBook_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLookBook_AggregatedArgs = {
  filter: InputMaybe<LookBook_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLookBook_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryLookBook_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySectionsDirectionsArgs = {
  filter: InputMaybe<SectionsDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySectionsDirections_AggregatedArgs = {
  filter: InputMaybe<SectionsDirections_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySectionsDirections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QuerySectionsDirections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryStyleTipsArgs = {
  filter: InputMaybe<StyleTips_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStyleTips_AggregatedArgs = {
  filter: InputMaybe<StyleTips_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStyleTips_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryStyleTips_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly additionalSections_mutated: Maybe<AdditionalSections_Mutated>;
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly directus_roles_mutated: Maybe<Directus_Roles_Mutated>;
  readonly directus_users_mutated: Maybe<Directus_Users_Mutated>;
  readonly goodsImg_mutated: Maybe<GoodsImg_Mutated>;
  readonly goodsTwoImages_mutated: Maybe<GoodsTwoImages_Mutated>;
  readonly goods_additionalSections_mutated: Maybe<Goods_AdditionalSections_Mutated>;
  readonly goods_files_mutated: Maybe<Goods_Files_Mutated>;
  readonly goods_goods_mutated: Maybe<Goods_Goods_Mutated>;
  readonly goods_image_builder_mutated: Maybe<Goods_Image_Builder_Mutated>;
  readonly goods_mutated: Maybe<Goods_Mutated>;
  readonly homePage_goods_1_mutated: Maybe<HomePage_Goods_1_Mutated>;
  readonly homePage_goods_mutated: Maybe<HomePage_Goods_Mutated>;
  readonly homePage_mutated: Maybe<HomePage_Mutated>;
  readonly lookBook_mutated: Maybe<LookBook_Mutated>;
  readonly sectionsDirections_mutated: Maybe<SectionsDirections_Mutated>;
  readonly styleTips_mutated: Maybe<StyleTips_Mutated>;
};


export type SubscriptionAdditionalSections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoodsImg_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoodsTwoImages_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_AdditionalSections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_Goods_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_Image_Builder_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHomePage_Goods_1_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHomePage_Goods_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHomePage_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionLookBook_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionSectionsDirections_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionStyleTips_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type AdditionalSections = {
  readonly __typename?: 'additionalSections';
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type AdditionalSections_Aggregated = {
  readonly __typename?: 'additionalSections_aggregated';
  readonly avg: Maybe<AdditionalSections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<AdditionalSections_Aggregated_Fields>;
  readonly count: Maybe<AdditionalSections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<AdditionalSections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<AdditionalSections_Aggregated_Fields>;
  readonly min: Maybe<AdditionalSections_Aggregated_Fields>;
  readonly sum: Maybe<AdditionalSections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<AdditionalSections_Aggregated_Fields>;
};

export type AdditionalSections_Aggregated_Count = {
  readonly __typename?: 'additionalSections_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type AdditionalSections_Aggregated_Fields = {
  readonly __typename?: 'additionalSections_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type AdditionalSections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<AdditionalSections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<AdditionalSections_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type AdditionalSections_Mutated = {
  readonly __typename?: 'additionalSections_mutated';
  readonly data: Maybe<AdditionalSections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  readonly _eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _neq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Scalars['String']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Directus_Users>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Directus_Users>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesModified_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<String_Filter_Operators>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<Directus_Users_Filter>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<Directus_Users_Filter>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Roles = {
  readonly __typename?: 'directus_roles';
  readonly admin_access: Scalars['Boolean']['output'];
  readonly app_access: Maybe<Scalars['Boolean']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly enforce_tfa: Scalars['Boolean']['output'];
  readonly icon: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly ip_access: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly name: Scalars['String']['output'];
  readonly users: Maybe<ReadonlyArray<Maybe<Directus_Users>>>;
  readonly users_func: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter: InputMaybe<Directus_Users_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly admin_access: InputMaybe<Boolean_Filter_Operators>;
  readonly app_access: InputMaybe<Boolean_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly enforce_tfa: InputMaybe<Boolean_Filter_Operators>;
  readonly icon: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly ip_access: InputMaybe<String_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly users: InputMaybe<Directus_Users_Filter>;
  readonly users_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  readonly __typename?: 'directus_roles_mutated';
  readonly data: Maybe<Directus_Roles>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Users = {
  readonly __typename?: 'directus_users';
  readonly address: Maybe<Scalars['String']['output']>;
  readonly appearance: Maybe<Scalars['String']['output']>;
  readonly auth_data: Maybe<Scalars['JSON']['output']>;
  readonly auth_data_func: Maybe<Count_Functions>;
  readonly avatar: Maybe<Directus_Files>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly email_notifications: Maybe<Scalars['Boolean']['output']>;
  readonly external_identifier: Maybe<Scalars['String']['output']>;
  readonly first_name: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly language: Maybe<Scalars['String']['output']>;
  readonly last_access: Maybe<Scalars['Date']['output']>;
  readonly last_access_func: Maybe<Datetime_Functions>;
  readonly last_name: Maybe<Scalars['String']['output']>;
  readonly last_page: Maybe<Scalars['String']['output']>;
  readonly location: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly password: Maybe<Scalars['Hash']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<Directus_Roles>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly surname: Maybe<Scalars['String']['output']>;
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly tfa_secret: Maybe<Scalars['Hash']['output']>;
  readonly theme_dark: Maybe<Scalars['String']['output']>;
  readonly theme_dark_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_dark_overrides_func: Maybe<Count_Functions>;
  readonly theme_light: Maybe<Scalars['String']['output']>;
  readonly theme_light_overrides: Maybe<Scalars['JSON']['output']>;
  readonly theme_light_overrides_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly token: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter: InputMaybe<Directus_Roles_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly address: InputMaybe<String_Filter_Operators>;
  readonly appearance: InputMaybe<String_Filter_Operators>;
  readonly auth_data: InputMaybe<String_Filter_Operators>;
  readonly auth_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly avatar: InputMaybe<Directus_Files_Filter>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly email: InputMaybe<String_Filter_Operators>;
  readonly email_notifications: InputMaybe<Boolean_Filter_Operators>;
  readonly external_identifier: InputMaybe<String_Filter_Operators>;
  readonly first_name: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly language: InputMaybe<String_Filter_Operators>;
  readonly last_access: InputMaybe<Date_Filter_Operators>;
  readonly last_access_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly last_name: InputMaybe<String_Filter_Operators>;
  readonly last_page: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly password: InputMaybe<Hash_Filter_Operators>;
  readonly phone: InputMaybe<String_Filter_Operators>;
  readonly provider: InputMaybe<String_Filter_Operators>;
  readonly role: InputMaybe<Directus_Roles_Filter>;
  readonly status: InputMaybe<String_Filter_Operators>;
  readonly surname: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tfa_secret: InputMaybe<Hash_Filter_Operators>;
  readonly theme_dark: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_dark_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly theme_light: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides: InputMaybe<String_Filter_Operators>;
  readonly theme_light_overrides_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly token: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  readonly __typename?: 'directus_users_mutated';
  readonly data: Maybe<Directus_Users>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods = {
  readonly __typename?: 'goods';
  readonly additionalDirection: Maybe<ReadonlyArray<Maybe<Goods_AdditionalSections>>>;
  readonly additionalDirection_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly direction: Maybe<SectionsDirections>;
  readonly id: Scalars['ID']['output'];
  readonly image_builder: Maybe<ReadonlyArray<Maybe<Goods_Image_Builder>>>;
  readonly image_builder_func: Maybe<Count_Functions>;
  readonly images: Maybe<ReadonlyArray<Maybe<Goods_Files>>>;
  readonly images_func: Maybe<Count_Functions>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parameters: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly recomendation: Maybe<ReadonlyArray<Maybe<Goods_Goods>>>;
  readonly recomendation_func: Maybe<Count_Functions>;
  readonly select: Maybe<Scalars['JSON']['output']>;
  readonly select_func: Maybe<Count_Functions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};


export type GoodsAdditionalDirectionArgs = {
  filter: InputMaybe<Goods_AdditionalSections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GoodsDirectionArgs = {
  filter: InputMaybe<SectionsDirections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GoodsImage_BuilderArgs = {
  filter: InputMaybe<Goods_Image_Builder_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GoodsImagesArgs = {
  filter: InputMaybe<Goods_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GoodsRecomendationArgs = {
  filter: InputMaybe<Goods_Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GoodsImg = {
  readonly __typename?: 'goodsImg';
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
};


export type GoodsImgImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GoodsImg_Aggregated = {
  readonly __typename?: 'goodsImg_aggregated';
  readonly avg: Maybe<GoodsImg_Aggregated_Fields>;
  readonly avgDistinct: Maybe<GoodsImg_Aggregated_Fields>;
  readonly count: Maybe<GoodsImg_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<GoodsImg_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<GoodsImg_Aggregated_Fields>;
  readonly min: Maybe<GoodsImg_Aggregated_Fields>;
  readonly sum: Maybe<GoodsImg_Aggregated_Fields>;
  readonly sumDistinct: Maybe<GoodsImg_Aggregated_Fields>;
};

export type GoodsImg_Aggregated_Count = {
  readonly __typename?: 'goodsImg_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
};

export type GoodsImg_Aggregated_Fields = {
  readonly __typename?: 'goodsImg_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type GoodsImg_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<GoodsImg_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<GoodsImg_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
};

export type GoodsImg_Mutated = {
  readonly __typename?: 'goodsImg_mutated';
  readonly data: Maybe<GoodsImg>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type GoodsTwoImages = {
  readonly __typename?: 'goodsTwoImages';
  readonly id: Scalars['ID']['output'];
  readonly imgOne: Maybe<Directus_Files>;
  readonly imgTwo: Maybe<Directus_Files>;
};


export type GoodsTwoImagesImgOneArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GoodsTwoImagesImgTwoArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GoodsTwoImages_Aggregated = {
  readonly __typename?: 'goodsTwoImages_aggregated';
  readonly avg: Maybe<GoodsTwoImages_Aggregated_Fields>;
  readonly avgDistinct: Maybe<GoodsTwoImages_Aggregated_Fields>;
  readonly count: Maybe<GoodsTwoImages_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<GoodsTwoImages_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<GoodsTwoImages_Aggregated_Fields>;
  readonly min: Maybe<GoodsTwoImages_Aggregated_Fields>;
  readonly sum: Maybe<GoodsTwoImages_Aggregated_Fields>;
  readonly sumDistinct: Maybe<GoodsTwoImages_Aggregated_Fields>;
};

export type GoodsTwoImages_Aggregated_Count = {
  readonly __typename?: 'goodsTwoImages_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly imgOne: Maybe<Scalars['Int']['output']>;
  readonly imgTwo: Maybe<Scalars['Int']['output']>;
};

export type GoodsTwoImages_Aggregated_Fields = {
  readonly __typename?: 'goodsTwoImages_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type GoodsTwoImages_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<GoodsTwoImages_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<GoodsTwoImages_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly imgOne: InputMaybe<Directus_Files_Filter>;
  readonly imgTwo: InputMaybe<Directus_Files_Filter>;
};

export type GoodsTwoImages_Mutated = {
  readonly __typename?: 'goodsTwoImages_mutated';
  readonly data: Maybe<GoodsTwoImages>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods_AdditionalSections = {
  readonly __typename?: 'goods_additionalSections';
  readonly additionalSections_id: Maybe<AdditionalSections>;
  readonly goods_id: Maybe<Goods>;
  readonly id: Scalars['ID']['output'];
};


export type Goods_AdditionalSectionsAdditionalSections_IdArgs = {
  filter: InputMaybe<AdditionalSections_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Goods_AdditionalSectionsGoods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Goods_AdditionalSections_Aggregated = {
  readonly __typename?: 'goods_additionalSections_aggregated';
  readonly avg: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
  readonly count: Maybe<Goods_AdditionalSections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_AdditionalSections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
  readonly min: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
  readonly sum: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_AdditionalSections_Aggregated_Fields>;
};

export type Goods_AdditionalSections_Aggregated_Count = {
  readonly __typename?: 'goods_additionalSections_aggregated_count';
  readonly additionalSections_id: Maybe<Scalars['Int']['output']>;
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Goods_AdditionalSections_Aggregated_Fields = {
  readonly __typename?: 'goods_additionalSections_aggregated_fields';
  readonly additionalSections_id: Maybe<Scalars['Float']['output']>;
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Goods_AdditionalSections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_AdditionalSections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_AdditionalSections_Filter>>>;
  readonly additionalSections_id: InputMaybe<AdditionalSections_Filter>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Goods_AdditionalSections_Mutated = {
  readonly __typename?: 'goods_additionalSections_mutated';
  readonly data: Maybe<Goods_AdditionalSections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods_Aggregated = {
  readonly __typename?: 'goods_aggregated';
  readonly avg: Maybe<Goods_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Aggregated_Fields>;
  readonly count: Maybe<Goods_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_Aggregated_Fields>;
  readonly min: Maybe<Goods_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Aggregated_Fields>;
};

export type Goods_Aggregated_Count = {
  readonly __typename?: 'goods_aggregated_count';
  readonly additionalDirection: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly direction: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly image_builder: Maybe<Scalars['Int']['output']>;
  readonly images: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['Int']['output']>;
  readonly parameters: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly recomendation: Maybe<Scalars['Int']['output']>;
  readonly select: Maybe<Scalars['Int']['output']>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};

export type Goods_Aggregated_Fields = {
  readonly __typename?: 'goods_aggregated_fields';
  readonly direction: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly sort: Maybe<Scalars['Float']['output']>;
};

export type Goods_Files = {
  readonly __typename?: 'goods_files';
  readonly directus_files_id: Maybe<Directus_Files>;
  readonly goods_id: Maybe<Goods>;
  readonly id: Scalars['ID']['output'];
};


export type Goods_FilesDirectus_Files_IdArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Goods_FilesGoods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Goods_Files_Aggregated = {
  readonly __typename?: 'goods_files_aggregated';
  readonly avg: Maybe<Goods_Files_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Files_Aggregated_Fields>;
  readonly count: Maybe<Goods_Files_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_Files_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_Files_Aggregated_Fields>;
  readonly min: Maybe<Goods_Files_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Files_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Files_Aggregated_Fields>;
};

export type Goods_Files_Aggregated_Count = {
  readonly __typename?: 'goods_files_aggregated_count';
  readonly directus_files_id: Maybe<Scalars['Int']['output']>;
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type Goods_Files_Aggregated_Fields = {
  readonly __typename?: 'goods_files_aggregated_fields';
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Goods_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Files_Filter>>>;
  readonly directus_files_id: InputMaybe<Directus_Files_Filter>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type Goods_Files_Mutated = {
  readonly __typename?: 'goods_files_mutated';
  readonly data: Maybe<Goods_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly additionalDirection: InputMaybe<Goods_AdditionalSections_Filter>;
  readonly additionalDirection_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly direction: InputMaybe<SectionsDirections_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly image_builder: InputMaybe<Goods_Image_Builder_Filter>;
  readonly image_builder_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly images: InputMaybe<Goods_Files_Filter>;
  readonly images_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly parameters: InputMaybe<String_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly recomendation: InputMaybe<Goods_Goods_Filter>;
  readonly recomendation_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly select: InputMaybe<String_Filter_Operators>;
  readonly select_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly sort: InputMaybe<Number_Filter_Operators>;
};

export type Goods_Goods = {
  readonly __typename?: 'goods_goods';
  readonly goods_id: Maybe<Goods>;
  readonly id: Scalars['ID']['output'];
  readonly related_goods_id: Maybe<Goods>;
};


export type Goods_GoodsGoods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type Goods_GoodsRelated_Goods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Goods_Goods_Aggregated = {
  readonly __typename?: 'goods_goods_aggregated';
  readonly avg: Maybe<Goods_Goods_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Goods_Aggregated_Fields>;
  readonly count: Maybe<Goods_Goods_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_Goods_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_Goods_Aggregated_Fields>;
  readonly min: Maybe<Goods_Goods_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Goods_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Goods_Aggregated_Fields>;
};

export type Goods_Goods_Aggregated_Count = {
  readonly __typename?: 'goods_goods_aggregated_count';
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly related_goods_id: Maybe<Scalars['Int']['output']>;
};

export type Goods_Goods_Aggregated_Fields = {
  readonly __typename?: 'goods_goods_aggregated_fields';
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly related_goods_id: Maybe<Scalars['Float']['output']>;
};

export type Goods_Goods_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Goods_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Goods_Filter>>>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly related_goods_id: InputMaybe<Goods_Filter>;
};

export type Goods_Goods_Mutated = {
  readonly __typename?: 'goods_goods_mutated';
  readonly data: Maybe<Goods_Goods>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods_Image_Builder = {
  readonly __typename?: 'goods_image_builder';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly goods_id: Maybe<Goods>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Goods_Image_Builder_Item_Union>;
};


export type Goods_Image_BuilderGoods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Goods_Image_Builder_Aggregated = {
  readonly __typename?: 'goods_image_builder_aggregated';
  readonly avg: Maybe<Goods_Image_Builder_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Image_Builder_Aggregated_Fields>;
  readonly count: Maybe<Goods_Image_Builder_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_Image_Builder_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_Image_Builder_Aggregated_Fields>;
  readonly min: Maybe<Goods_Image_Builder_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Image_Builder_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Image_Builder_Aggregated_Fields>;
};

export type Goods_Image_Builder_Aggregated_Count = {
  readonly __typename?: 'goods_image_builder_aggregated_count';
  readonly collection: Maybe<Scalars['Int']['output']>;
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly item: Maybe<Scalars['Int']['output']>;
};

export type Goods_Image_Builder_Aggregated_Fields = {
  readonly __typename?: 'goods_image_builder_aggregated_fields';
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Goods_Image_Builder_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Image_Builder_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Image_Builder_Filter>>>;
  readonly collection: InputMaybe<String_Filter_Operators>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly item__goodsImg: InputMaybe<GoodsImg_Filter>;
  readonly item__goodsTwoImages: InputMaybe<GoodsTwoImages_Filter>;
};

export type Goods_Image_Builder_Item_Union = GoodsImg | GoodsTwoImages;

export type Goods_Image_Builder_Mutated = {
  readonly __typename?: 'goods_image_builder_mutated';
  readonly data: Maybe<Goods_Image_Builder>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods_Mutated = {
  readonly __typename?: 'goods_mutated';
  readonly data: Maybe<Goods>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePage = {
  readonly __typename?: 'homePage';
  readonly id: Scalars['ID']['output'];
  readonly newItems: Maybe<ReadonlyArray<Maybe<HomePage_Goods>>>;
  readonly newItems_func: Maybe<Count_Functions>;
  readonly sliderBestsellers: Maybe<ReadonlyArray<Maybe<HomePage_Goods_1>>>;
  readonly sliderBestsellers_func: Maybe<Count_Functions>;
};


export type HomePageNewItemsArgs = {
  filter: InputMaybe<HomePage_Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageSliderBestsellersArgs = {
  filter: InputMaybe<HomePage_Goods_1_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly newItems: InputMaybe<HomePage_Goods_Filter>;
  readonly newItems_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly sliderBestsellers: InputMaybe<HomePage_Goods_1_Filter>;
  readonly sliderBestsellers_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type HomePage_Goods = {
  readonly __typename?: 'homePage_goods';
  readonly goods_id: Maybe<Goods>;
  readonly homePage_id: Maybe<HomePage>;
  readonly id: Scalars['ID']['output'];
};


export type HomePage_GoodsGoods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePage_GoodsHomePage_IdArgs = {
  filter: InputMaybe<HomePage_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Goods_1 = {
  readonly __typename?: 'homePage_goods_1';
  readonly goods_id: Maybe<Goods>;
  readonly homePage_id: Maybe<HomePage>;
  readonly id: Scalars['ID']['output'];
};


export type HomePage_Goods_1Goods_IdArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePage_Goods_1HomePage_IdArgs = {
  filter: InputMaybe<HomePage_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Goods_1_Aggregated = {
  readonly __typename?: 'homePage_goods_1_aggregated';
  readonly avg: Maybe<HomePage_Goods_1_Aggregated_Fields>;
  readonly avgDistinct: Maybe<HomePage_Goods_1_Aggregated_Fields>;
  readonly count: Maybe<HomePage_Goods_1_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<HomePage_Goods_1_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<HomePage_Goods_1_Aggregated_Fields>;
  readonly min: Maybe<HomePage_Goods_1_Aggregated_Fields>;
  readonly sum: Maybe<HomePage_Goods_1_Aggregated_Fields>;
  readonly sumDistinct: Maybe<HomePage_Goods_1_Aggregated_Fields>;
};

export type HomePage_Goods_1_Aggregated_Count = {
  readonly __typename?: 'homePage_goods_1_aggregated_count';
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly homePage_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type HomePage_Goods_1_Aggregated_Fields = {
  readonly __typename?: 'homePage_goods_1_aggregated_fields';
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly homePage_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type HomePage_Goods_1_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Goods_1_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Goods_1_Filter>>>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly homePage_id: InputMaybe<HomePage_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type HomePage_Goods_1_Mutated = {
  readonly __typename?: 'homePage_goods_1_mutated';
  readonly data: Maybe<HomePage_Goods_1>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type HomePage_Goods_Aggregated = {
  readonly __typename?: 'homePage_goods_aggregated';
  readonly avg: Maybe<HomePage_Goods_Aggregated_Fields>;
  readonly avgDistinct: Maybe<HomePage_Goods_Aggregated_Fields>;
  readonly count: Maybe<HomePage_Goods_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<HomePage_Goods_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<HomePage_Goods_Aggregated_Fields>;
  readonly min: Maybe<HomePage_Goods_Aggregated_Fields>;
  readonly sum: Maybe<HomePage_Goods_Aggregated_Fields>;
  readonly sumDistinct: Maybe<HomePage_Goods_Aggregated_Fields>;
};

export type HomePage_Goods_Aggregated_Count = {
  readonly __typename?: 'homePage_goods_aggregated_count';
  readonly goods_id: Maybe<Scalars['Int']['output']>;
  readonly homePage_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
};

export type HomePage_Goods_Aggregated_Fields = {
  readonly __typename?: 'homePage_goods_aggregated_fields';
  readonly goods_id: Maybe<Scalars['Float']['output']>;
  readonly homePage_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type HomePage_Goods_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Goods_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Goods_Filter>>>;
  readonly goods_id: InputMaybe<Goods_Filter>;
  readonly homePage_id: InputMaybe<HomePage_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
};

export type HomePage_Goods_Mutated = {
  readonly __typename?: 'homePage_goods_mutated';
  readonly data: Maybe<HomePage_Goods>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type HomePage_Mutated = {
  readonly __typename?: 'homePage_mutated';
  readonly data: Maybe<HomePage>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type LookBook = {
  readonly __typename?: 'lookBook';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img1: Maybe<Directus_Files>;
  readonly img2: Maybe<Directus_Files>;
  readonly img3: Maybe<Directus_Files>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type LookBookImg1Args = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type LookBookImg2Args = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type LookBookImg3Args = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LookBook_Aggregated = {
  readonly __typename?: 'lookBook_aggregated';
  readonly avg: Maybe<LookBook_Aggregated_Fields>;
  readonly avgDistinct: Maybe<LookBook_Aggregated_Fields>;
  readonly count: Maybe<LookBook_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<LookBook_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<LookBook_Aggregated_Fields>;
  readonly min: Maybe<LookBook_Aggregated_Fields>;
  readonly sum: Maybe<LookBook_Aggregated_Fields>;
  readonly sumDistinct: Maybe<LookBook_Aggregated_Fields>;
};

export type LookBook_Aggregated_Count = {
  readonly __typename?: 'lookBook_aggregated_count';
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img1: Maybe<Scalars['Int']['output']>;
  readonly img2: Maybe<Scalars['Int']['output']>;
  readonly img3: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type LookBook_Aggregated_Fields = {
  readonly __typename?: 'lookBook_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type LookBook_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<LookBook_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<LookBook_Filter>>>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img1: InputMaybe<Directus_Files_Filter>;
  readonly img2: InputMaybe<Directus_Files_Filter>;
  readonly img3: InputMaybe<Directus_Files_Filter>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type LookBook_Mutated = {
  readonly __typename?: 'lookBook_mutated';
  readonly data: Maybe<LookBook>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectionsDirections = {
  readonly __typename?: 'sectionsDirections';
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type SectionsDirections_Aggregated = {
  readonly __typename?: 'sectionsDirections_aggregated';
  readonly avg: Maybe<SectionsDirections_Aggregated_Fields>;
  readonly avgDistinct: Maybe<SectionsDirections_Aggregated_Fields>;
  readonly count: Maybe<SectionsDirections_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<SectionsDirections_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<SectionsDirections_Aggregated_Fields>;
  readonly min: Maybe<SectionsDirections_Aggregated_Fields>;
  readonly sum: Maybe<SectionsDirections_Aggregated_Fields>;
  readonly sumDistinct: Maybe<SectionsDirections_Aggregated_Fields>;
};

export type SectionsDirections_Aggregated_Count = {
  readonly __typename?: 'sectionsDirections_aggregated_count';
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type SectionsDirections_Aggregated_Fields = {
  readonly __typename?: 'sectionsDirections_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type SectionsDirections_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<SectionsDirections_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<SectionsDirections_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type SectionsDirections_Mutated = {
  readonly __typename?: 'sectionsDirections_mutated';
  readonly data: Maybe<SectionsDirections>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type StyleTips = {
  readonly __typename?: 'styleTips';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly mainImage: Maybe<Directus_Files>;
  readonly markdown: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type StyleTipsMainImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type StyleTips_Aggregated = {
  readonly __typename?: 'styleTips_aggregated';
  readonly avg: Maybe<StyleTips_Aggregated_Fields>;
  readonly avgDistinct: Maybe<StyleTips_Aggregated_Fields>;
  readonly count: Maybe<StyleTips_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<StyleTips_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<StyleTips_Aggregated_Fields>;
  readonly min: Maybe<StyleTips_Aggregated_Fields>;
  readonly sum: Maybe<StyleTips_Aggregated_Fields>;
  readonly sumDistinct: Maybe<StyleTips_Aggregated_Fields>;
};

export type StyleTips_Aggregated_Count = {
  readonly __typename?: 'styleTips_aggregated_count';
  readonly date_created: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly mainImage: Maybe<Scalars['Int']['output']>;
  readonly markdown: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type StyleTips_Aggregated_Fields = {
  readonly __typename?: 'styleTips_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type StyleTips_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<StyleTips_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<StyleTips_Filter>>>;
  readonly date_created: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly mainImage: InputMaybe<Directus_Files_Filter>;
  readonly markdown: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type StyleTips_Mutated = {
  readonly __typename?: 'styleTips_mutated';
  readonly data: Maybe<StyleTips>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Version_AdditionalSections = {
  readonly __typename?: 'version_additionalSections';
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_Goods = {
  readonly __typename?: 'version_goods';
  readonly additionalDirection: Maybe<Scalars['JSON']['output']>;
  readonly additionalDirection_func: Maybe<Count_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly direction: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image_builder: Maybe<Scalars['JSON']['output']>;
  readonly image_builder_func: Maybe<Count_Functions>;
  readonly images: Maybe<Scalars['JSON']['output']>;
  readonly images_func: Maybe<Count_Functions>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parameters: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly recomendation: Maybe<Scalars['JSON']['output']>;
  readonly recomendation_func: Maybe<Count_Functions>;
  readonly select: Maybe<Scalars['JSON']['output']>;
  readonly select_func: Maybe<Count_Functions>;
  readonly sort: Maybe<Scalars['Int']['output']>;
};

export type Version_GoodsImg = {
  readonly __typename?: 'version_goodsImg';
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
};

export type Version_GoodsTwoImages = {
  readonly __typename?: 'version_goodsTwoImages';
  readonly id: Scalars['ID']['output'];
  readonly imgOne: Maybe<Scalars['JSON']['output']>;
  readonly imgTwo: Maybe<Scalars['JSON']['output']>;
};

export type Version_Goods_AdditionalSections = {
  readonly __typename?: 'version_goods_additionalSections';
  readonly additionalSections_id: Maybe<Scalars['JSON']['output']>;
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Goods_Files = {
  readonly __typename?: 'version_goods_files';
  readonly directus_files_id: Maybe<Scalars['JSON']['output']>;
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_Goods_Goods = {
  readonly __typename?: 'version_goods_goods';
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly related_goods_id: Maybe<Scalars['JSON']['output']>;
};

export type Version_Goods_Image_Builder = {
  readonly __typename?: 'version_goods_image_builder';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Scalars['String']['output']>;
};

export type Version_HomePage = {
  readonly __typename?: 'version_homePage';
  readonly id: Scalars['ID']['output'];
  readonly newItems: Maybe<Scalars['JSON']['output']>;
  readonly newItems_func: Maybe<Count_Functions>;
  readonly sliderBestsellers: Maybe<Scalars['JSON']['output']>;
  readonly sliderBestsellers_func: Maybe<Count_Functions>;
};

export type Version_HomePage_Goods = {
  readonly __typename?: 'version_homePage_goods';
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly homePage_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_HomePage_Goods_1 = {
  readonly __typename?: 'version_homePage_goods_1';
  readonly goods_id: Maybe<Scalars['JSON']['output']>;
  readonly homePage_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type Version_LookBook = {
  readonly __typename?: 'version_lookBook';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img1: Maybe<Scalars['JSON']['output']>;
  readonly img2: Maybe<Scalars['JSON']['output']>;
  readonly img3: Maybe<Scalars['JSON']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_SectionsDirections = {
  readonly __typename?: 'version_sectionsDirections';
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_StyleTips = {
  readonly __typename?: 'version_styleTips';
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly mainImage: Maybe<Scalars['JSON']['output']>;
  readonly markdown: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type GetBurgerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBurgerQuery = { readonly __typename?: 'Query', readonly additionalSections: ReadonlyArray<{ readonly __typename?: 'additionalSections', readonly id: string, readonly title: string }>, readonly sectionsDirections: ReadonlyArray<{ readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }> };

export type GetGoodsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGoodsQuery = { readonly __typename?: 'Query', readonly goods_by_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }>, readonly recomendation: ReadonlyArray<{ readonly __typename?: 'goods_goods', readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }> } }> } };

export type GoodFragment = { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }>, readonly recomendation: ReadonlyArray<{ readonly __typename?: 'goods_goods', readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }> } }> };

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number };

export type GetGoodsFavoritesItemsQueryVariables = Exact<{
  ids: InputMaybe<ReadonlyArray<Scalars['GraphQLStringOrFloat']['input']> | Scalars['GraphQLStringOrFloat']['input']>;
}>;


export type GetGoodsFavoritesItemsQuery = { readonly __typename?: 'Query', readonly goods: ReadonlyArray<{ readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }>, readonly recomendation: ReadonlyArray<{ readonly __typename?: 'goods_goods', readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }> } }> }> };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly homePage: { readonly __typename?: 'homePage', readonly id: string, readonly sliderBestsellers: ReadonlyArray<{ readonly __typename?: 'homePage_goods_1', readonly id: string, readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly select: any, readonly name: string, readonly price: number, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly id: string, readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> } }>, readonly newItems: ReadonlyArray<{ readonly __typename?: 'homePage_goods', readonly id: string, readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly select: any, readonly name: string, readonly price: number, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> } }> } };

export type GetLookBockByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetLookBockByIdQuery = { readonly __typename?: 'Query', readonly lookBook_by_id: { readonly __typename?: 'lookBook', readonly id: string, readonly title: string, readonly description: string } };

export type GetLookBockQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLookBockQuery = { readonly __typename?: 'Query', readonly lookBook: ReadonlyArray<{ readonly __typename?: 'lookBook', readonly id: string, readonly title: string, readonly description: string, readonly img1: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly img2: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly img3: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> };

export type GetTipsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTipsPageQuery = { readonly __typename?: 'Query', readonly styleTips: ReadonlyArray<{ readonly __typename?: 'styleTips', readonly id: string, readonly date_created: any, readonly title: string, readonly mainImage: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> };

export type GetTipsItemPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTipsItemPageQuery = { readonly __typename?: 'Query', readonly styleTips_by_id: { readonly __typename?: 'styleTips', readonly id: string, readonly date_created: any, readonly title: string, readonly markdown: string } };

export type GetGoodItemsQueryVariables = Exact<{
  directionTitle: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGoodItemsQuery = { readonly __typename?: 'Query', readonly goods: ReadonlyArray<{ readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }>, readonly recomendation: ReadonlyArray<{ readonly __typename?: 'goods_goods', readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }> } }> }> };

export type GetGoodItemsAdditionalQueryVariables = Exact<{
  additionalTitle: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGoodItemsAdditionalQuery = { readonly __typename?: 'Query', readonly goods: ReadonlyArray<{ readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }>, readonly recomendation: ReadonlyArray<{ readonly __typename?: 'goods_goods', readonly goods_id: { readonly __typename?: 'goods', readonly id: string, readonly name: string, readonly price: number, readonly description: string, readonly parameters: string, readonly select: any, readonly direction: { readonly __typename?: 'sectionsDirections', readonly id: string, readonly title: string }, readonly images: ReadonlyArray<{ readonly __typename?: 'goods_files', readonly directus_files_id: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }>, readonly image_builder: ReadonlyArray<{ readonly __typename?: 'goods_image_builder', readonly id: string, readonly collection: string, readonly item: { readonly __typename: 'goodsImg', readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } | { readonly __typename: 'goodsTwoImages', readonly imgOne: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number }, readonly imgTwo: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } } }> } }> }> };

export type GetLastTwoStyleTipsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastTwoStyleTipsQuery = { readonly __typename?: 'Query', readonly styleTips: ReadonlyArray<{ readonly __typename?: 'styleTips', readonly id: string, readonly date_created: any, readonly title: string, readonly mainImage: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on directus_files {
  id
  width
  height
}
    `;
export const GoodFragmentDoc = gql`
    fragment Good on goods {
  id
  name
  price
  description
  parameters
  select
  direction {
    id
    title
  }
  images {
    directus_files_id {
      ...MediaFragment
    }
  }
  image_builder {
    id
    item {
      __typename
      ... on goodsImg {
        img {
          ...MediaFragment
        }
      }
      ... on goodsTwoImages {
        imgOne {
          ...MediaFragment
        }
        imgTwo {
          ...MediaFragment
        }
      }
    }
    collection
  }
  recomendation {
    goods_id {
      id
      name
      price
      description
      parameters
      select
      direction {
        id
        title
      }
      images {
        directus_files_id {
          ...MediaFragment
        }
      }
      image_builder {
        id
        item {
          __typename
          ... on goodsImg {
            img {
              ...MediaFragment
            }
          }
          ... on goodsTwoImages {
            imgOne {
              ...MediaFragment
            }
            imgTwo {
              ...MediaFragment
            }
          }
        }
        collection
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetBurgerDocument = gql`
    query GetBurger {
  additionalSections {
    id
    title
  }
  sectionsDirections {
    id
    title
  }
}
    `;
export const GetGoodsDocument = gql`
    query GetGoods($id: ID!) {
  goods_by_id(id: $id) {
    ...Good
  }
}
    ${GoodFragmentDoc}`;
export const GetGoodsFavoritesItemsDocument = gql`
    query GetGoodsFavoritesItems($ids: [GraphQLStringOrFloat!]) {
  goods(filter: {id: {_in: $ids}}) {
    ...Good
  }
}
    ${GoodFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  homePage {
    id
    sliderBestsellers {
      id
      goods_id {
        id
        select
        name
        price
        images {
          id
          directus_files_id {
            ...MediaFragment
          }
        }
      }
    }
    newItems {
      id
      goods_id {
        id
        select
        name
        price
        images {
          directus_files_id {
            ...MediaFragment
          }
        }
      }
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetLookBockByIdDocument = gql`
    query GetLookBockById($id: ID!) {
  lookBook_by_id(id: $id) {
    id
    title
    description
  }
}
    `;
export const GetLookBockDocument = gql`
    query GetLookBock {
  lookBook {
    id
    title
    description
    img1 {
      ...MediaFragment
    }
    img2 {
      ...MediaFragment
    }
    img3 {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetTipsPageDocument = gql`
    query GetTipsPage {
  styleTips(sort: ["-date_created"]) {
    id
    date_created
    mainImage {
      ...MediaFragment
    }
    title
  }
}
    ${MediaFragmentFragmentDoc}`;
export const GetTipsItemPageDocument = gql`
    query GetTipsItemPage($id: ID!) {
  styleTips_by_id(id: $id) {
    id
    date_created
    title
    markdown
  }
}
    `;
export const GetGoodItemsDocument = gql`
    query GetGoodItems($directionTitle: String) {
  goods(filter: {direction: {title: {_eq: $directionTitle}}}) {
    ...Good
  }
}
    ${GoodFragmentDoc}`;
export const GetGoodItemsAdditionalDocument = gql`
    query GetGoodItemsAdditional($additionalTitle: String) {
  goods(
    filter: {additionalDirection: {additionalSections_id: {title: {_eq: $additionalTitle}}}}
  ) {
    ...Good
  }
}
    ${GoodFragmentDoc}`;
export const GetLastTwoStyleTipsDocument = gql`
    query GetLastTwoStyleTips {
  styleTips(sort: ["-date_created"], limit: 2) {
    id
    date_created
    mainImage {
      ...MediaFragment
    }
    title
  }
}
    ${MediaFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetBurger(variables?: GetBurgerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBurgerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBurgerQuery>(GetBurgerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBurger', 'query', variables);
    },
    GetGoods(variables: GetGoodsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGoodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoodsQuery>(GetGoodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGoods', 'query', variables);
    },
    GetGoodsFavoritesItems(variables?: GetGoodsFavoritesItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGoodsFavoritesItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoodsFavoritesItemsQuery>(GetGoodsFavoritesItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGoodsFavoritesItems', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePage', 'query', variables);
    },
    GetLookBockById(variables: GetLookBockByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLookBockByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLookBockByIdQuery>(GetLookBockByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLookBockById', 'query', variables);
    },
    GetLookBock(variables?: GetLookBockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLookBockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLookBockQuery>(GetLookBockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLookBock', 'query', variables);
    },
    GetTipsPage(variables?: GetTipsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTipsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTipsPageQuery>(GetTipsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTipsPage', 'query', variables);
    },
    GetTipsItemPage(variables: GetTipsItemPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTipsItemPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTipsItemPageQuery>(GetTipsItemPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTipsItemPage', 'query', variables);
    },
    GetGoodItems(variables?: GetGoodItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGoodItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoodItemsQuery>(GetGoodItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGoodItems', 'query', variables);
    },
    GetGoodItemsAdditional(variables?: GetGoodItemsAdditionalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGoodItemsAdditionalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoodItemsAdditionalQuery>(GetGoodItemsAdditionalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGoodItemsAdditional', 'query', variables);
    },
    GetLastTwoStyleTips(variables?: GetLastTwoStyleTipsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLastTwoStyleTipsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLastTwoStyleTipsQuery>(GetLastTwoStyleTipsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLastTwoStyleTips', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;