export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type GraphCms_Asset = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  imagesRecipe: Array<GraphCms_Recipe>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  url: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
};


export type GraphCms_AssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<GraphCmsImagePlaceholder>;
};

export type GraphCmsImagePlaceholder =
  | 'NONE'
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG';

export type GraphCms_Locale =
  | 'en';

export type GraphCms_Stage =
  | 'DRAFT'
  | 'PUBLISHED';

export type GraphCms_User = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  kind: GraphCms_UserKind;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_Recipe = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tools?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  yields?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Int']>;
  overnight: Scalars['Boolean'];
  margaritasFavorite: Scalars['Boolean'];
  artemsFavorite: Scalars['Boolean'];
  ingredients?: Maybe<Scalars['String']>;
  steps?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  leftovers?: Maybe<Scalars['String']>;
  privateNotes?: Maybe<Scalars['String']>;
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  images: Array<GraphCms_Asset>;
  subrecipes: Array<GraphCms_Recipe>;
  recipes?: Maybe<GraphCms_Recipe>;
  cuisines: Array<GraphCms_Cuisine>;
  tags: Array<GraphCms_Tag>;
  difficulty?: Maybe<GraphCms_Difficulty>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  allIngredients: Array<IngredientsJson>;
  allIngredientsInfo: Array<IngredientInfoJson>;
  flags: FlagsJson;
  seasons: Array<Scalars['Int']>;
  preconditions: Array<Scalars['String']>;
  warnings: Array<Scalars['String']>;
  tips: Array<Scalars['String']>;
  descriptionMdx: Scalars['String'];
  ingredientsMdx: Scalars['String'];
  notesMdx: Scalars['String'];
  sourceMdx: Scalars['String'];
  stepsMdx: Scalars['String'];
  toolsMdx: Scalars['String'];
};

export type GraphCms_ScheduledOperation = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  rawPayload: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  release?: Maybe<GraphCms_ScheduledRelease>;
  status: GraphCms_ScheduledOperationStatus;
  affectedDocuments: Array<GraphCms_ScheduledOperationAffectedDocument>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_Ingredient = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  warnings?: Maybe<Scalars['String']>;
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  descriptionMdx: Scalars['String'];
  storageMdx: Scalars['String'];
};

export type GraphCms_Cuisine =
  | 'Greek'
  | 'Italian'
  | 'Russian'
  | 'Mexican'
  | 'Vietnamese'
  | 'Japanese'
  | 'Chinese'
  | 'Korean'
  | 'French';

export type GraphCms_Tag =
  | 'Soup'
  | 'Lunch'
  | 'Salad'
  | 'Foundation'
  | 'Snack'
  | 'SweetBread'
  | 'Charring'
  | 'Drink'
  | 'Pickling'
  | 'Dip'
  | 'Leftovers'
  | 'Baking'
  | 'Dessert'
  | 'Breakfast'
  | 'Sauce'
  | 'Spicy'
  | 'Dressing'
  | 'Icing'
  | 'Celebration'
  | 'Crowd'
  | 'Picnic'
  | 'NewYear'
  | 'Christmas'
  | 'Warming'
  | 'Dinner';

export type GraphCms_Difficulty =
  | 'Easy'
  | 'Medium'
  | 'Hardcore';

export type GraphCms_ScheduledRelease = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isImplicit: Scalars['Boolean'];
  releaseAt?: Maybe<Scalars['JSON']>;
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  operations: Array<GraphCms_ScheduledOperation>;
  status: GraphCms_ScheduledReleaseStatus;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

export type GraphCms_ScheduledOperationAffectedDocument = GraphCms_Asset | GraphCms_Ingredient | GraphCms_Recipe | GraphCms_Shop | GraphCms_Tip;

export type GraphCms_ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

export type GraphCms_Location = {
  remoteTypeName: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GraphCms_ShopType =
  | 'PackageFreeShop'
  | 'FarmerMarket'
  | 'ForeignProductShop';

export type GraphCms_Country =
  | 'Germany';

export type GraphCms_UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

export type FlagsJson = {
  vegan: Scalars['Boolean'];
  vegetarian: Scalars['Boolean'];
  glutenFree: Scalars['Boolean'];
  lowGluten: Scalars['Boolean'];
  dairyFree: Scalars['Boolean'];
  noAddedSugar: Scalars['Boolean'];
};

export type IngredientJson = {
  name: Scalars['String'];
  minAmount?: Maybe<Scalars['String']>;
  maxAmount?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  modifier?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type IngredientsJson = {
  slug: Scalars['String'];
  ingredients: Array<IngredientJson>;
};

export type IngredientInfoJson = {
  name: Scalars['String'];
  kind: Scalars['Int'];
  hasGluten: Scalars['Boolean'];
  hasDairy: Scalars['Boolean'];
  hasSugar: Scalars['Boolean'];
  seasons: Array<Scalars['Int']>;
};

export type GraphCms_Shop = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  location?: Maybe<GraphCms_Location>;
  online: Scalars['Boolean'];
  hasOfflineStore: Scalars['Boolean'];
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  type: Array<GraphCms_ShopType>;
  country?: Maybe<GraphCms_Country>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  descriptionMdx: Scalars['String'];
};

export type GraphCms_Tip = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  content?: Maybe<Scalars['String']>;
  ingredient?: Maybe<Scalars['String']>;
  createdBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  publishedBy?: Maybe<GraphCms_User>;
  tags: Array<GraphCms_Tag>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  allGraphCmsAsset: GraphCms_AssetConnection;
  graphCmsUser?: Maybe<GraphCms_User>;
  allGraphCmsUser: GraphCms_UserConnection;
  graphCmsRecipe?: Maybe<GraphCms_Recipe>;
  allGraphCmsRecipe: GraphCms_RecipeConnection;
  graphCmsScheduledOperation?: Maybe<GraphCms_ScheduledOperation>;
  allGraphCmsScheduledOperation: GraphCms_ScheduledOperationConnection;
  graphCmsIngredient?: Maybe<GraphCms_Ingredient>;
  allGraphCmsIngredient: GraphCms_IngredientConnection;
  graphCmsScheduledRelease?: Maybe<GraphCms_ScheduledRelease>;
  allGraphCmsScheduledRelease: GraphCms_ScheduledReleaseConnection;
  graphCmsShop?: Maybe<GraphCms_Shop>;
  allGraphCmsShop: GraphCms_ShopConnection;
  graphCmsTip?: Maybe<GraphCms_Tip>;
  allGraphCmsTip: GraphCms_TipConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsAssetArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  imagesRecipe?: InputMaybe<GraphCms_RecipeFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsAssetArgs = {
  filter?: InputMaybe<GraphCms_AssetFilterInput>;
  sort?: InputMaybe<GraphCms_AssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsUserArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsUserArgs = {
  filter?: InputMaybe<GraphCms_UserFilterInput>;
  sort?: InputMaybe<GraphCms_UserSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsRecipeArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  tools?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<StringQueryOperatorInput>;
  yields?: InputMaybe<StringQueryOperatorInput>;
  time?: InputMaybe<IntQueryOperatorInput>;
  overnight?: InputMaybe<BooleanQueryOperatorInput>;
  margaritasFavorite?: InputMaybe<BooleanQueryOperatorInput>;
  artemsFavorite?: InputMaybe<BooleanQueryOperatorInput>;
  ingredients?: InputMaybe<StringQueryOperatorInput>;
  steps?: InputMaybe<StringQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  leftovers?: InputMaybe<StringQueryOperatorInput>;
  privateNotes?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  images?: InputMaybe<GraphCms_AssetFilterListInput>;
  subrecipes?: InputMaybe<GraphCms_RecipeFilterListInput>;
  recipes?: InputMaybe<GraphCms_RecipeFilterInput>;
  cuisines?: InputMaybe<GraphCms_CuisineQueryOperatorInput>;
  tags?: InputMaybe<GraphCms_TagQueryOperatorInput>;
  difficulty?: InputMaybe<GraphCms_DifficultyQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsRecipeArgs = {
  filter?: InputMaybe<GraphCms_RecipeFilterInput>;
  sort?: InputMaybe<GraphCms_RecipeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsScheduledOperationArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsScheduledOperationArgs = {
  filter?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledOperationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsIngredientArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  storage?: InputMaybe<StringQueryOperatorInput>;
  warnings?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsIngredientArgs = {
  filter?: InputMaybe<GraphCms_IngredientFilterInput>;
  sort?: InputMaybe<GraphCms_IngredientSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsScheduledReleaseArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsScheduledReleaseArgs = {
  filter?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledReleaseSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsShopArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  city?: InputMaybe<StringQueryOperatorInput>;
  neighbourhood?: InputMaybe<StringQueryOperatorInput>;
  zip?: InputMaybe<IntQueryOperatorInput>;
  address?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<GraphCms_LocationFilterInput>;
  online?: InputMaybe<BooleanQueryOperatorInput>;
  hasOfflineStore?: InputMaybe<BooleanQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  type?: InputMaybe<GraphCms_ShopTypeQueryOperatorInput>;
  country?: InputMaybe<GraphCms_CountryQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsShopArgs = {
  filter?: InputMaybe<GraphCms_ShopFilterInput>;
  sort?: InputMaybe<GraphCms_ShopSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsTipArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  ingredient?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  tags?: InputMaybe<GraphCms_TagQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsTipArgs = {
  filter?: InputMaybe<GraphCms_TipFilterInput>;
  sort?: InputMaybe<GraphCms_TipSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Locale>;
  ne?: InputMaybe<GraphCms_Locale>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
};

export type GraphCms_StageQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Stage>;
  ne?: InputMaybe<GraphCms_Stage>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
};

export type GraphCms_UserFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_UserKind>;
  ne?: InputMaybe<GraphCms_UserKind>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
};

export type GraphCms_RecipeFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_RecipeFilterInput>;
};

export type GraphCms_RecipeFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  tools?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<StringQueryOperatorInput>;
  yields?: InputMaybe<StringQueryOperatorInput>;
  time?: InputMaybe<IntQueryOperatorInput>;
  overnight?: InputMaybe<BooleanQueryOperatorInput>;
  margaritasFavorite?: InputMaybe<BooleanQueryOperatorInput>;
  artemsFavorite?: InputMaybe<BooleanQueryOperatorInput>;
  ingredients?: InputMaybe<StringQueryOperatorInput>;
  steps?: InputMaybe<StringQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  leftovers?: InputMaybe<StringQueryOperatorInput>;
  privateNotes?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  images?: InputMaybe<GraphCms_AssetFilterListInput>;
  subrecipes?: InputMaybe<GraphCms_RecipeFilterListInput>;
  recipes?: InputMaybe<GraphCms_RecipeFilterInput>;
  cuisines?: InputMaybe<GraphCms_CuisineQueryOperatorInput>;
  tags?: InputMaybe<GraphCms_TagQueryOperatorInput>;
  difficulty?: InputMaybe<GraphCms_DifficultyQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_AssetFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_AssetFilterInput>;
};

export type GraphCms_AssetFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  imagesRecipe?: InputMaybe<GraphCms_RecipeFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledOperationFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
};

export type GraphCms_ScheduledOperationFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  ne?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
};

export type GraphCms_ScheduledOperationStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  ne?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
};

export type GraphCms_CuisineQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Cuisine>;
  ne?: InputMaybe<GraphCms_Cuisine>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Cuisine>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Cuisine>>>;
};

export type GraphCms_TagQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Tag>;
  ne?: InputMaybe<GraphCms_Tag>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Tag>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Tag>>>;
};

export type GraphCms_DifficultyQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Difficulty>;
  ne?: InputMaybe<GraphCms_Difficulty>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Difficulty>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Difficulty>>>;
};

export type GraphCms_AssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
};


export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetEdge = {
  next?: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous?: Maybe<GraphCms_Asset>;
};

export type GraphCms_AssetFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'handle'
  | 'fileName'
  | 'height'
  | 'width'
  | 'size'
  | 'mimeType'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'imagesRecipe'
  | 'imagesRecipe___remoteTypeName'
  | 'imagesRecipe___remoteId'
  | 'imagesRecipe___stage'
  | 'imagesRecipe___createdAt'
  | 'imagesRecipe___updatedAt'
  | 'imagesRecipe___publishedAt'
  | 'imagesRecipe___title'
  | 'imagesRecipe___slug'
  | 'imagesRecipe___description'
  | 'imagesRecipe___tools'
  | 'imagesRecipe___source'
  | 'imagesRecipe___yields'
  | 'imagesRecipe___time'
  | 'imagesRecipe___overnight'
  | 'imagesRecipe___margaritasFavorite'
  | 'imagesRecipe___artemsFavorite'
  | 'imagesRecipe___ingredients'
  | 'imagesRecipe___steps'
  | 'imagesRecipe___notes'
  | 'imagesRecipe___leftovers'
  | 'imagesRecipe___privateNotes'
  | 'imagesRecipe___createdBy___remoteTypeName'
  | 'imagesRecipe___createdBy___remoteId'
  | 'imagesRecipe___createdBy___stage'
  | 'imagesRecipe___createdBy___createdAt'
  | 'imagesRecipe___createdBy___updatedAt'
  | 'imagesRecipe___createdBy___publishedAt'
  | 'imagesRecipe___createdBy___name'
  | 'imagesRecipe___createdBy___picture'
  | 'imagesRecipe___createdBy___isActive'
  | 'imagesRecipe___createdBy___kind'
  | 'imagesRecipe___createdBy___id'
  | 'imagesRecipe___createdBy___parent___id'
  | 'imagesRecipe___createdBy___parent___children'
  | 'imagesRecipe___createdBy___children'
  | 'imagesRecipe___createdBy___children___id'
  | 'imagesRecipe___createdBy___children___children'
  | 'imagesRecipe___createdBy___internal___content'
  | 'imagesRecipe___createdBy___internal___contentDigest'
  | 'imagesRecipe___createdBy___internal___description'
  | 'imagesRecipe___createdBy___internal___fieldOwners'
  | 'imagesRecipe___createdBy___internal___ignoreType'
  | 'imagesRecipe___createdBy___internal___mediaType'
  | 'imagesRecipe___createdBy___internal___owner'
  | 'imagesRecipe___createdBy___internal___type'
  | 'imagesRecipe___updatedBy___remoteTypeName'
  | 'imagesRecipe___updatedBy___remoteId'
  | 'imagesRecipe___updatedBy___stage'
  | 'imagesRecipe___updatedBy___createdAt'
  | 'imagesRecipe___updatedBy___updatedAt'
  | 'imagesRecipe___updatedBy___publishedAt'
  | 'imagesRecipe___updatedBy___name'
  | 'imagesRecipe___updatedBy___picture'
  | 'imagesRecipe___updatedBy___isActive'
  | 'imagesRecipe___updatedBy___kind'
  | 'imagesRecipe___updatedBy___id'
  | 'imagesRecipe___updatedBy___parent___id'
  | 'imagesRecipe___updatedBy___parent___children'
  | 'imagesRecipe___updatedBy___children'
  | 'imagesRecipe___updatedBy___children___id'
  | 'imagesRecipe___updatedBy___children___children'
  | 'imagesRecipe___updatedBy___internal___content'
  | 'imagesRecipe___updatedBy___internal___contentDigest'
  | 'imagesRecipe___updatedBy___internal___description'
  | 'imagesRecipe___updatedBy___internal___fieldOwners'
  | 'imagesRecipe___updatedBy___internal___ignoreType'
  | 'imagesRecipe___updatedBy___internal___mediaType'
  | 'imagesRecipe___updatedBy___internal___owner'
  | 'imagesRecipe___updatedBy___internal___type'
  | 'imagesRecipe___publishedBy___remoteTypeName'
  | 'imagesRecipe___publishedBy___remoteId'
  | 'imagesRecipe___publishedBy___stage'
  | 'imagesRecipe___publishedBy___createdAt'
  | 'imagesRecipe___publishedBy___updatedAt'
  | 'imagesRecipe___publishedBy___publishedAt'
  | 'imagesRecipe___publishedBy___name'
  | 'imagesRecipe___publishedBy___picture'
  | 'imagesRecipe___publishedBy___isActive'
  | 'imagesRecipe___publishedBy___kind'
  | 'imagesRecipe___publishedBy___id'
  | 'imagesRecipe___publishedBy___parent___id'
  | 'imagesRecipe___publishedBy___parent___children'
  | 'imagesRecipe___publishedBy___children'
  | 'imagesRecipe___publishedBy___children___id'
  | 'imagesRecipe___publishedBy___children___children'
  | 'imagesRecipe___publishedBy___internal___content'
  | 'imagesRecipe___publishedBy___internal___contentDigest'
  | 'imagesRecipe___publishedBy___internal___description'
  | 'imagesRecipe___publishedBy___internal___fieldOwners'
  | 'imagesRecipe___publishedBy___internal___ignoreType'
  | 'imagesRecipe___publishedBy___internal___mediaType'
  | 'imagesRecipe___publishedBy___internal___owner'
  | 'imagesRecipe___publishedBy___internal___type'
  | 'imagesRecipe___images'
  | 'imagesRecipe___images___remoteTypeName'
  | 'imagesRecipe___images___remoteId'
  | 'imagesRecipe___images___locale'
  | 'imagesRecipe___images___stage'
  | 'imagesRecipe___images___createdAt'
  | 'imagesRecipe___images___updatedAt'
  | 'imagesRecipe___images___publishedAt'
  | 'imagesRecipe___images___handle'
  | 'imagesRecipe___images___fileName'
  | 'imagesRecipe___images___height'
  | 'imagesRecipe___images___width'
  | 'imagesRecipe___images___size'
  | 'imagesRecipe___images___mimeType'
  | 'imagesRecipe___images___createdBy___remoteTypeName'
  | 'imagesRecipe___images___createdBy___remoteId'
  | 'imagesRecipe___images___createdBy___stage'
  | 'imagesRecipe___images___createdBy___createdAt'
  | 'imagesRecipe___images___createdBy___updatedAt'
  | 'imagesRecipe___images___createdBy___publishedAt'
  | 'imagesRecipe___images___createdBy___name'
  | 'imagesRecipe___images___createdBy___picture'
  | 'imagesRecipe___images___createdBy___isActive'
  | 'imagesRecipe___images___createdBy___kind'
  | 'imagesRecipe___images___createdBy___id'
  | 'imagesRecipe___images___createdBy___children'
  | 'imagesRecipe___images___updatedBy___remoteTypeName'
  | 'imagesRecipe___images___updatedBy___remoteId'
  | 'imagesRecipe___images___updatedBy___stage'
  | 'imagesRecipe___images___updatedBy___createdAt'
  | 'imagesRecipe___images___updatedBy___updatedAt'
  | 'imagesRecipe___images___updatedBy___publishedAt'
  | 'imagesRecipe___images___updatedBy___name'
  | 'imagesRecipe___images___updatedBy___picture'
  | 'imagesRecipe___images___updatedBy___isActive'
  | 'imagesRecipe___images___updatedBy___kind'
  | 'imagesRecipe___images___updatedBy___id'
  | 'imagesRecipe___images___updatedBy___children'
  | 'imagesRecipe___images___publishedBy___remoteTypeName'
  | 'imagesRecipe___images___publishedBy___remoteId'
  | 'imagesRecipe___images___publishedBy___stage'
  | 'imagesRecipe___images___publishedBy___createdAt'
  | 'imagesRecipe___images___publishedBy___updatedAt'
  | 'imagesRecipe___images___publishedBy___publishedAt'
  | 'imagesRecipe___images___publishedBy___name'
  | 'imagesRecipe___images___publishedBy___picture'
  | 'imagesRecipe___images___publishedBy___isActive'
  | 'imagesRecipe___images___publishedBy___kind'
  | 'imagesRecipe___images___publishedBy___id'
  | 'imagesRecipe___images___publishedBy___children'
  | 'imagesRecipe___images___imagesRecipe'
  | 'imagesRecipe___images___imagesRecipe___remoteTypeName'
  | 'imagesRecipe___images___imagesRecipe___remoteId'
  | 'imagesRecipe___images___imagesRecipe___stage'
  | 'imagesRecipe___images___imagesRecipe___createdAt'
  | 'imagesRecipe___images___imagesRecipe___updatedAt'
  | 'imagesRecipe___images___imagesRecipe___publishedAt'
  | 'imagesRecipe___images___imagesRecipe___title'
  | 'imagesRecipe___images___imagesRecipe___slug'
  | 'imagesRecipe___images___imagesRecipe___description'
  | 'imagesRecipe___images___imagesRecipe___tools'
  | 'imagesRecipe___images___imagesRecipe___source'
  | 'imagesRecipe___images___imagesRecipe___yields'
  | 'imagesRecipe___images___imagesRecipe___time'
  | 'imagesRecipe___images___imagesRecipe___overnight'
  | 'imagesRecipe___images___imagesRecipe___margaritasFavorite'
  | 'imagesRecipe___images___imagesRecipe___artemsFavorite'
  | 'imagesRecipe___images___imagesRecipe___ingredients'
  | 'imagesRecipe___images___imagesRecipe___steps'
  | 'imagesRecipe___images___imagesRecipe___notes'
  | 'imagesRecipe___images___imagesRecipe___leftovers'
  | 'imagesRecipe___images___imagesRecipe___privateNotes'
  | 'imagesRecipe___images___imagesRecipe___images'
  | 'imagesRecipe___images___imagesRecipe___subrecipes'
  | 'imagesRecipe___images___imagesRecipe___cuisines'
  | 'imagesRecipe___images___imagesRecipe___tags'
  | 'imagesRecipe___images___imagesRecipe___difficulty'
  | 'imagesRecipe___images___imagesRecipe___scheduledIn'
  | 'imagesRecipe___images___imagesRecipe___id'
  | 'imagesRecipe___images___imagesRecipe___children'
  | 'imagesRecipe___images___scheduledIn'
  | 'imagesRecipe___images___scheduledIn___remoteTypeName'
  | 'imagesRecipe___images___scheduledIn___remoteId'
  | 'imagesRecipe___images___scheduledIn___stage'
  | 'imagesRecipe___images___scheduledIn___createdAt'
  | 'imagesRecipe___images___scheduledIn___updatedAt'
  | 'imagesRecipe___images___scheduledIn___publishedAt'
  | 'imagesRecipe___images___scheduledIn___description'
  | 'imagesRecipe___images___scheduledIn___errorMessage'
  | 'imagesRecipe___images___scheduledIn___rawPayload'
  | 'imagesRecipe___images___scheduledIn___status'
  | 'imagesRecipe___images___scheduledIn___id'
  | 'imagesRecipe___images___scheduledIn___children'
  | 'imagesRecipe___images___url'
  | 'imagesRecipe___images___id'
  | 'imagesRecipe___images___parent___id'
  | 'imagesRecipe___images___parent___children'
  | 'imagesRecipe___images___children'
  | 'imagesRecipe___images___children___id'
  | 'imagesRecipe___images___children___children'
  | 'imagesRecipe___images___internal___content'
  | 'imagesRecipe___images___internal___contentDigest'
  | 'imagesRecipe___images___internal___description'
  | 'imagesRecipe___images___internal___fieldOwners'
  | 'imagesRecipe___images___internal___ignoreType'
  | 'imagesRecipe___images___internal___mediaType'
  | 'imagesRecipe___images___internal___owner'
  | 'imagesRecipe___images___internal___type'
  | 'imagesRecipe___subrecipes'
  | 'imagesRecipe___subrecipes___remoteTypeName'
  | 'imagesRecipe___subrecipes___remoteId'
  | 'imagesRecipe___subrecipes___stage'
  | 'imagesRecipe___subrecipes___createdAt'
  | 'imagesRecipe___subrecipes___updatedAt'
  | 'imagesRecipe___subrecipes___publishedAt'
  | 'imagesRecipe___subrecipes___title'
  | 'imagesRecipe___subrecipes___slug'
  | 'imagesRecipe___subrecipes___description'
  | 'imagesRecipe___subrecipes___tools'
  | 'imagesRecipe___subrecipes___source'
  | 'imagesRecipe___subrecipes___yields'
  | 'imagesRecipe___subrecipes___time'
  | 'imagesRecipe___subrecipes___overnight'
  | 'imagesRecipe___subrecipes___margaritasFavorite'
  | 'imagesRecipe___subrecipes___artemsFavorite'
  | 'imagesRecipe___subrecipes___ingredients'
  | 'imagesRecipe___subrecipes___steps'
  | 'imagesRecipe___subrecipes___notes'
  | 'imagesRecipe___subrecipes___leftovers'
  | 'imagesRecipe___subrecipes___privateNotes'
  | 'imagesRecipe___subrecipes___createdBy___remoteTypeName'
  | 'imagesRecipe___subrecipes___createdBy___remoteId'
  | 'imagesRecipe___subrecipes___createdBy___stage'
  | 'imagesRecipe___subrecipes___createdBy___createdAt'
  | 'imagesRecipe___subrecipes___createdBy___updatedAt'
  | 'imagesRecipe___subrecipes___createdBy___publishedAt'
  | 'imagesRecipe___subrecipes___createdBy___name'
  | 'imagesRecipe___subrecipes___createdBy___picture'
  | 'imagesRecipe___subrecipes___createdBy___isActive'
  | 'imagesRecipe___subrecipes___createdBy___kind'
  | 'imagesRecipe___subrecipes___createdBy___id'
  | 'imagesRecipe___subrecipes___createdBy___children'
  | 'imagesRecipe___subrecipes___updatedBy___remoteTypeName'
  | 'imagesRecipe___subrecipes___updatedBy___remoteId'
  | 'imagesRecipe___subrecipes___updatedBy___stage'
  | 'imagesRecipe___subrecipes___updatedBy___createdAt'
  | 'imagesRecipe___subrecipes___updatedBy___updatedAt'
  | 'imagesRecipe___subrecipes___updatedBy___publishedAt'
  | 'imagesRecipe___subrecipes___updatedBy___name'
  | 'imagesRecipe___subrecipes___updatedBy___picture'
  | 'imagesRecipe___subrecipes___updatedBy___isActive'
  | 'imagesRecipe___subrecipes___updatedBy___kind'
  | 'imagesRecipe___subrecipes___updatedBy___id'
  | 'imagesRecipe___subrecipes___updatedBy___children'
  | 'imagesRecipe___subrecipes___publishedBy___remoteTypeName'
  | 'imagesRecipe___subrecipes___publishedBy___remoteId'
  | 'imagesRecipe___subrecipes___publishedBy___stage'
  | 'imagesRecipe___subrecipes___publishedBy___createdAt'
  | 'imagesRecipe___subrecipes___publishedBy___updatedAt'
  | 'imagesRecipe___subrecipes___publishedBy___publishedAt'
  | 'imagesRecipe___subrecipes___publishedBy___name'
  | 'imagesRecipe___subrecipes___publishedBy___picture'
  | 'imagesRecipe___subrecipes___publishedBy___isActive'
  | 'imagesRecipe___subrecipes___publishedBy___kind'
  | 'imagesRecipe___subrecipes___publishedBy___id'
  | 'imagesRecipe___subrecipes___publishedBy___children'
  | 'imagesRecipe___subrecipes___images'
  | 'imagesRecipe___subrecipes___images___remoteTypeName'
  | 'imagesRecipe___subrecipes___images___remoteId'
  | 'imagesRecipe___subrecipes___images___locale'
  | 'imagesRecipe___subrecipes___images___stage'
  | 'imagesRecipe___subrecipes___images___createdAt'
  | 'imagesRecipe___subrecipes___images___updatedAt'
  | 'imagesRecipe___subrecipes___images___publishedAt'
  | 'imagesRecipe___subrecipes___images___handle'
  | 'imagesRecipe___subrecipes___images___fileName'
  | 'imagesRecipe___subrecipes___images___height'
  | 'imagesRecipe___subrecipes___images___width'
  | 'imagesRecipe___subrecipes___images___size'
  | 'imagesRecipe___subrecipes___images___mimeType'
  | 'imagesRecipe___subrecipes___images___imagesRecipe'
  | 'imagesRecipe___subrecipes___images___scheduledIn'
  | 'imagesRecipe___subrecipes___images___url'
  | 'imagesRecipe___subrecipes___images___id'
  | 'imagesRecipe___subrecipes___images___children'
  | 'imagesRecipe___subrecipes___subrecipes'
  | 'imagesRecipe___subrecipes___subrecipes___remoteTypeName'
  | 'imagesRecipe___subrecipes___subrecipes___remoteId'
  | 'imagesRecipe___subrecipes___subrecipes___stage'
  | 'imagesRecipe___subrecipes___subrecipes___createdAt'
  | 'imagesRecipe___subrecipes___subrecipes___updatedAt'
  | 'imagesRecipe___subrecipes___subrecipes___publishedAt'
  | 'imagesRecipe___subrecipes___subrecipes___title'
  | 'imagesRecipe___subrecipes___subrecipes___slug'
  | 'imagesRecipe___subrecipes___subrecipes___description'
  | 'imagesRecipe___subrecipes___subrecipes___tools'
  | 'imagesRecipe___subrecipes___subrecipes___source'
  | 'imagesRecipe___subrecipes___subrecipes___yields'
  | 'imagesRecipe___subrecipes___subrecipes___time'
  | 'imagesRecipe___subrecipes___subrecipes___overnight'
  | 'imagesRecipe___subrecipes___subrecipes___margaritasFavorite'
  | 'imagesRecipe___subrecipes___subrecipes___artemsFavorite'
  | 'imagesRecipe___subrecipes___subrecipes___ingredients'
  | 'imagesRecipe___subrecipes___subrecipes___steps'
  | 'imagesRecipe___subrecipes___subrecipes___notes'
  | 'imagesRecipe___subrecipes___subrecipes___leftovers'
  | 'imagesRecipe___subrecipes___subrecipes___privateNotes'
  | 'imagesRecipe___subrecipes___subrecipes___images'
  | 'imagesRecipe___subrecipes___subrecipes___subrecipes'
  | 'imagesRecipe___subrecipes___subrecipes___cuisines'
  | 'imagesRecipe___subrecipes___subrecipes___tags'
  | 'imagesRecipe___subrecipes___subrecipes___difficulty'
  | 'imagesRecipe___subrecipes___subrecipes___scheduledIn'
  | 'imagesRecipe___subrecipes___subrecipes___id'
  | 'imagesRecipe___subrecipes___subrecipes___children'
  | 'imagesRecipe___subrecipes___recipes___remoteTypeName'
  | 'imagesRecipe___subrecipes___recipes___remoteId'
  | 'imagesRecipe___subrecipes___recipes___stage'
  | 'imagesRecipe___subrecipes___recipes___createdAt'
  | 'imagesRecipe___subrecipes___recipes___updatedAt'
  | 'imagesRecipe___subrecipes___recipes___publishedAt'
  | 'imagesRecipe___subrecipes___recipes___title'
  | 'imagesRecipe___subrecipes___recipes___slug'
  | 'imagesRecipe___subrecipes___recipes___description'
  | 'imagesRecipe___subrecipes___recipes___tools'
  | 'imagesRecipe___subrecipes___recipes___source'
  | 'imagesRecipe___subrecipes___recipes___yields'
  | 'imagesRecipe___subrecipes___recipes___time'
  | 'imagesRecipe___subrecipes___recipes___overnight'
  | 'imagesRecipe___subrecipes___recipes___margaritasFavorite'
  | 'imagesRecipe___subrecipes___recipes___artemsFavorite'
  | 'imagesRecipe___subrecipes___recipes___ingredients'
  | 'imagesRecipe___subrecipes___recipes___steps'
  | 'imagesRecipe___subrecipes___recipes___notes'
  | 'imagesRecipe___subrecipes___recipes___leftovers'
  | 'imagesRecipe___subrecipes___recipes___privateNotes'
  | 'imagesRecipe___subrecipes___recipes___images'
  | 'imagesRecipe___subrecipes___recipes___subrecipes'
  | 'imagesRecipe___subrecipes___recipes___cuisines'
  | 'imagesRecipe___subrecipes___recipes___tags'
  | 'imagesRecipe___subrecipes___recipes___difficulty'
  | 'imagesRecipe___subrecipes___recipes___scheduledIn'
  | 'imagesRecipe___subrecipes___recipes___id'
  | 'imagesRecipe___subrecipes___recipes___children'
  | 'imagesRecipe___subrecipes___cuisines'
  | 'imagesRecipe___subrecipes___tags'
  | 'imagesRecipe___subrecipes___difficulty'
  | 'imagesRecipe___subrecipes___scheduledIn'
  | 'imagesRecipe___subrecipes___scheduledIn___remoteTypeName'
  | 'imagesRecipe___subrecipes___scheduledIn___remoteId'
  | 'imagesRecipe___subrecipes___scheduledIn___stage'
  | 'imagesRecipe___subrecipes___scheduledIn___createdAt'
  | 'imagesRecipe___subrecipes___scheduledIn___updatedAt'
  | 'imagesRecipe___subrecipes___scheduledIn___publishedAt'
  | 'imagesRecipe___subrecipes___scheduledIn___description'
  | 'imagesRecipe___subrecipes___scheduledIn___errorMessage'
  | 'imagesRecipe___subrecipes___scheduledIn___rawPayload'
  | 'imagesRecipe___subrecipes___scheduledIn___status'
  | 'imagesRecipe___subrecipes___scheduledIn___id'
  | 'imagesRecipe___subrecipes___scheduledIn___children'
  | 'imagesRecipe___subrecipes___id'
  | 'imagesRecipe___subrecipes___parent___id'
  | 'imagesRecipe___subrecipes___parent___children'
  | 'imagesRecipe___subrecipes___children'
  | 'imagesRecipe___subrecipes___children___id'
  | 'imagesRecipe___subrecipes___children___children'
  | 'imagesRecipe___subrecipes___internal___content'
  | 'imagesRecipe___subrecipes___internal___contentDigest'
  | 'imagesRecipe___subrecipes___internal___description'
  | 'imagesRecipe___subrecipes___internal___fieldOwners'
  | 'imagesRecipe___subrecipes___internal___ignoreType'
  | 'imagesRecipe___subrecipes___internal___mediaType'
  | 'imagesRecipe___subrecipes___internal___owner'
  | 'imagesRecipe___subrecipes___internal___type'
  | 'imagesRecipe___recipes___remoteTypeName'
  | 'imagesRecipe___recipes___remoteId'
  | 'imagesRecipe___recipes___stage'
  | 'imagesRecipe___recipes___createdAt'
  | 'imagesRecipe___recipes___updatedAt'
  | 'imagesRecipe___recipes___publishedAt'
  | 'imagesRecipe___recipes___title'
  | 'imagesRecipe___recipes___slug'
  | 'imagesRecipe___recipes___description'
  | 'imagesRecipe___recipes___tools'
  | 'imagesRecipe___recipes___source'
  | 'imagesRecipe___recipes___yields'
  | 'imagesRecipe___recipes___time'
  | 'imagesRecipe___recipes___overnight'
  | 'imagesRecipe___recipes___margaritasFavorite'
  | 'imagesRecipe___recipes___artemsFavorite'
  | 'imagesRecipe___recipes___ingredients'
  | 'imagesRecipe___recipes___steps'
  | 'imagesRecipe___recipes___notes'
  | 'imagesRecipe___recipes___leftovers'
  | 'imagesRecipe___recipes___privateNotes'
  | 'imagesRecipe___recipes___createdBy___remoteTypeName'
  | 'imagesRecipe___recipes___createdBy___remoteId'
  | 'imagesRecipe___recipes___createdBy___stage'
  | 'imagesRecipe___recipes___createdBy___createdAt'
  | 'imagesRecipe___recipes___createdBy___updatedAt'
  | 'imagesRecipe___recipes___createdBy___publishedAt'
  | 'imagesRecipe___recipes___createdBy___name'
  | 'imagesRecipe___recipes___createdBy___picture'
  | 'imagesRecipe___recipes___createdBy___isActive'
  | 'imagesRecipe___recipes___createdBy___kind'
  | 'imagesRecipe___recipes___createdBy___id'
  | 'imagesRecipe___recipes___createdBy___children'
  | 'imagesRecipe___recipes___updatedBy___remoteTypeName'
  | 'imagesRecipe___recipes___updatedBy___remoteId'
  | 'imagesRecipe___recipes___updatedBy___stage'
  | 'imagesRecipe___recipes___updatedBy___createdAt'
  | 'imagesRecipe___recipes___updatedBy___updatedAt'
  | 'imagesRecipe___recipes___updatedBy___publishedAt'
  | 'imagesRecipe___recipes___updatedBy___name'
  | 'imagesRecipe___recipes___updatedBy___picture'
  | 'imagesRecipe___recipes___updatedBy___isActive'
  | 'imagesRecipe___recipes___updatedBy___kind'
  | 'imagesRecipe___recipes___updatedBy___id'
  | 'imagesRecipe___recipes___updatedBy___children'
  | 'imagesRecipe___recipes___publishedBy___remoteTypeName'
  | 'imagesRecipe___recipes___publishedBy___remoteId'
  | 'imagesRecipe___recipes___publishedBy___stage'
  | 'imagesRecipe___recipes___publishedBy___createdAt'
  | 'imagesRecipe___recipes___publishedBy___updatedAt'
  | 'imagesRecipe___recipes___publishedBy___publishedAt'
  | 'imagesRecipe___recipes___publishedBy___name'
  | 'imagesRecipe___recipes___publishedBy___picture'
  | 'imagesRecipe___recipes___publishedBy___isActive'
  | 'imagesRecipe___recipes___publishedBy___kind'
  | 'imagesRecipe___recipes___publishedBy___id'
  | 'imagesRecipe___recipes___publishedBy___children'
  | 'imagesRecipe___recipes___images'
  | 'imagesRecipe___recipes___images___remoteTypeName'
  | 'imagesRecipe___recipes___images___remoteId'
  | 'imagesRecipe___recipes___images___locale'
  | 'imagesRecipe___recipes___images___stage'
  | 'imagesRecipe___recipes___images___createdAt'
  | 'imagesRecipe___recipes___images___updatedAt'
  | 'imagesRecipe___recipes___images___publishedAt'
  | 'imagesRecipe___recipes___images___handle'
  | 'imagesRecipe___recipes___images___fileName'
  | 'imagesRecipe___recipes___images___height'
  | 'imagesRecipe___recipes___images___width'
  | 'imagesRecipe___recipes___images___size'
  | 'imagesRecipe___recipes___images___mimeType'
  | 'imagesRecipe___recipes___images___imagesRecipe'
  | 'imagesRecipe___recipes___images___scheduledIn'
  | 'imagesRecipe___recipes___images___url'
  | 'imagesRecipe___recipes___images___id'
  | 'imagesRecipe___recipes___images___children'
  | 'imagesRecipe___recipes___subrecipes'
  | 'imagesRecipe___recipes___subrecipes___remoteTypeName'
  | 'imagesRecipe___recipes___subrecipes___remoteId'
  | 'imagesRecipe___recipes___subrecipes___stage'
  | 'imagesRecipe___recipes___subrecipes___createdAt'
  | 'imagesRecipe___recipes___subrecipes___updatedAt'
  | 'imagesRecipe___recipes___subrecipes___publishedAt'
  | 'imagesRecipe___recipes___subrecipes___title'
  | 'imagesRecipe___recipes___subrecipes___slug'
  | 'imagesRecipe___recipes___subrecipes___description'
  | 'imagesRecipe___recipes___subrecipes___tools'
  | 'imagesRecipe___recipes___subrecipes___source'
  | 'imagesRecipe___recipes___subrecipes___yields'
  | 'imagesRecipe___recipes___subrecipes___time'
  | 'imagesRecipe___recipes___subrecipes___overnight'
  | 'imagesRecipe___recipes___subrecipes___margaritasFavorite'
  | 'imagesRecipe___recipes___subrecipes___artemsFavorite'
  | 'imagesRecipe___recipes___subrecipes___ingredients'
  | 'imagesRecipe___recipes___subrecipes___steps'
  | 'imagesRecipe___recipes___subrecipes___notes'
  | 'imagesRecipe___recipes___subrecipes___leftovers'
  | 'imagesRecipe___recipes___subrecipes___privateNotes'
  | 'imagesRecipe___recipes___subrecipes___images'
  | 'imagesRecipe___recipes___subrecipes___subrecipes'
  | 'imagesRecipe___recipes___subrecipes___cuisines'
  | 'imagesRecipe___recipes___subrecipes___tags'
  | 'imagesRecipe___recipes___subrecipes___difficulty'
  | 'imagesRecipe___recipes___subrecipes___scheduledIn'
  | 'imagesRecipe___recipes___subrecipes___id'
  | 'imagesRecipe___recipes___subrecipes___children'
  | 'imagesRecipe___recipes___recipes___remoteTypeName'
  | 'imagesRecipe___recipes___recipes___remoteId'
  | 'imagesRecipe___recipes___recipes___stage'
  | 'imagesRecipe___recipes___recipes___createdAt'
  | 'imagesRecipe___recipes___recipes___updatedAt'
  | 'imagesRecipe___recipes___recipes___publishedAt'
  | 'imagesRecipe___recipes___recipes___title'
  | 'imagesRecipe___recipes___recipes___slug'
  | 'imagesRecipe___recipes___recipes___description'
  | 'imagesRecipe___recipes___recipes___tools'
  | 'imagesRecipe___recipes___recipes___source'
  | 'imagesRecipe___recipes___recipes___yields'
  | 'imagesRecipe___recipes___recipes___time'
  | 'imagesRecipe___recipes___recipes___overnight'
  | 'imagesRecipe___recipes___recipes___margaritasFavorite'
  | 'imagesRecipe___recipes___recipes___artemsFavorite'
  | 'imagesRecipe___recipes___recipes___ingredients'
  | 'imagesRecipe___recipes___recipes___steps'
  | 'imagesRecipe___recipes___recipes___notes'
  | 'imagesRecipe___recipes___recipes___leftovers'
  | 'imagesRecipe___recipes___recipes___privateNotes'
  | 'imagesRecipe___recipes___recipes___images'
  | 'imagesRecipe___recipes___recipes___subrecipes'
  | 'imagesRecipe___recipes___recipes___cuisines'
  | 'imagesRecipe___recipes___recipes___tags'
  | 'imagesRecipe___recipes___recipes___difficulty'
  | 'imagesRecipe___recipes___recipes___scheduledIn'
  | 'imagesRecipe___recipes___recipes___id'
  | 'imagesRecipe___recipes___recipes___children'
  | 'imagesRecipe___recipes___cuisines'
  | 'imagesRecipe___recipes___tags'
  | 'imagesRecipe___recipes___difficulty'
  | 'imagesRecipe___recipes___scheduledIn'
  | 'imagesRecipe___recipes___scheduledIn___remoteTypeName'
  | 'imagesRecipe___recipes___scheduledIn___remoteId'
  | 'imagesRecipe___recipes___scheduledIn___stage'
  | 'imagesRecipe___recipes___scheduledIn___createdAt'
  | 'imagesRecipe___recipes___scheduledIn___updatedAt'
  | 'imagesRecipe___recipes___scheduledIn___publishedAt'
  | 'imagesRecipe___recipes___scheduledIn___description'
  | 'imagesRecipe___recipes___scheduledIn___errorMessage'
  | 'imagesRecipe___recipes___scheduledIn___rawPayload'
  | 'imagesRecipe___recipes___scheduledIn___status'
  | 'imagesRecipe___recipes___scheduledIn___id'
  | 'imagesRecipe___recipes___scheduledIn___children'
  | 'imagesRecipe___recipes___id'
  | 'imagesRecipe___recipes___parent___id'
  | 'imagesRecipe___recipes___parent___children'
  | 'imagesRecipe___recipes___children'
  | 'imagesRecipe___recipes___children___id'
  | 'imagesRecipe___recipes___children___children'
  | 'imagesRecipe___recipes___internal___content'
  | 'imagesRecipe___recipes___internal___contentDigest'
  | 'imagesRecipe___recipes___internal___description'
  | 'imagesRecipe___recipes___internal___fieldOwners'
  | 'imagesRecipe___recipes___internal___ignoreType'
  | 'imagesRecipe___recipes___internal___mediaType'
  | 'imagesRecipe___recipes___internal___owner'
  | 'imagesRecipe___recipes___internal___type'
  | 'imagesRecipe___cuisines'
  | 'imagesRecipe___tags'
  | 'imagesRecipe___difficulty'
  | 'imagesRecipe___scheduledIn'
  | 'imagesRecipe___scheduledIn___remoteTypeName'
  | 'imagesRecipe___scheduledIn___remoteId'
  | 'imagesRecipe___scheduledIn___stage'
  | 'imagesRecipe___scheduledIn___createdAt'
  | 'imagesRecipe___scheduledIn___updatedAt'
  | 'imagesRecipe___scheduledIn___publishedAt'
  | 'imagesRecipe___scheduledIn___description'
  | 'imagesRecipe___scheduledIn___errorMessage'
  | 'imagesRecipe___scheduledIn___rawPayload'
  | 'imagesRecipe___scheduledIn___createdBy___remoteTypeName'
  | 'imagesRecipe___scheduledIn___createdBy___remoteId'
  | 'imagesRecipe___scheduledIn___createdBy___stage'
  | 'imagesRecipe___scheduledIn___createdBy___createdAt'
  | 'imagesRecipe___scheduledIn___createdBy___updatedAt'
  | 'imagesRecipe___scheduledIn___createdBy___publishedAt'
  | 'imagesRecipe___scheduledIn___createdBy___name'
  | 'imagesRecipe___scheduledIn___createdBy___picture'
  | 'imagesRecipe___scheduledIn___createdBy___isActive'
  | 'imagesRecipe___scheduledIn___createdBy___kind'
  | 'imagesRecipe___scheduledIn___createdBy___id'
  | 'imagesRecipe___scheduledIn___createdBy___children'
  | 'imagesRecipe___scheduledIn___updatedBy___remoteTypeName'
  | 'imagesRecipe___scheduledIn___updatedBy___remoteId'
  | 'imagesRecipe___scheduledIn___updatedBy___stage'
  | 'imagesRecipe___scheduledIn___updatedBy___createdAt'
  | 'imagesRecipe___scheduledIn___updatedBy___updatedAt'
  | 'imagesRecipe___scheduledIn___updatedBy___publishedAt'
  | 'imagesRecipe___scheduledIn___updatedBy___name'
  | 'imagesRecipe___scheduledIn___updatedBy___picture'
  | 'imagesRecipe___scheduledIn___updatedBy___isActive'
  | 'imagesRecipe___scheduledIn___updatedBy___kind'
  | 'imagesRecipe___scheduledIn___updatedBy___id'
  | 'imagesRecipe___scheduledIn___updatedBy___children'
  | 'imagesRecipe___scheduledIn___publishedBy___remoteTypeName'
  | 'imagesRecipe___scheduledIn___publishedBy___remoteId'
  | 'imagesRecipe___scheduledIn___publishedBy___stage'
  | 'imagesRecipe___scheduledIn___publishedBy___createdAt'
  | 'imagesRecipe___scheduledIn___publishedBy___updatedAt'
  | 'imagesRecipe___scheduledIn___publishedBy___publishedAt'
  | 'imagesRecipe___scheduledIn___publishedBy___name'
  | 'imagesRecipe___scheduledIn___publishedBy___picture'
  | 'imagesRecipe___scheduledIn___publishedBy___isActive'
  | 'imagesRecipe___scheduledIn___publishedBy___kind'
  | 'imagesRecipe___scheduledIn___publishedBy___id'
  | 'imagesRecipe___scheduledIn___publishedBy___children'
  | 'imagesRecipe___scheduledIn___release___remoteTypeName'
  | 'imagesRecipe___scheduledIn___release___remoteId'
  | 'imagesRecipe___scheduledIn___release___stage'
  | 'imagesRecipe___scheduledIn___release___createdAt'
  | 'imagesRecipe___scheduledIn___release___updatedAt'
  | 'imagesRecipe___scheduledIn___release___publishedAt'
  | 'imagesRecipe___scheduledIn___release___title'
  | 'imagesRecipe___scheduledIn___release___description'
  | 'imagesRecipe___scheduledIn___release___errorMessage'
  | 'imagesRecipe___scheduledIn___release___isActive'
  | 'imagesRecipe___scheduledIn___release___isImplicit'
  | 'imagesRecipe___scheduledIn___release___releaseAt'
  | 'imagesRecipe___scheduledIn___release___operations'
  | 'imagesRecipe___scheduledIn___release___status'
  | 'imagesRecipe___scheduledIn___release___id'
  | 'imagesRecipe___scheduledIn___release___children'
  | 'imagesRecipe___scheduledIn___status'
  | 'imagesRecipe___scheduledIn___id'
  | 'imagesRecipe___scheduledIn___parent___id'
  | 'imagesRecipe___scheduledIn___parent___children'
  | 'imagesRecipe___scheduledIn___children'
  | 'imagesRecipe___scheduledIn___children___id'
  | 'imagesRecipe___scheduledIn___children___children'
  | 'imagesRecipe___scheduledIn___internal___content'
  | 'imagesRecipe___scheduledIn___internal___contentDigest'
  | 'imagesRecipe___scheduledIn___internal___description'
  | 'imagesRecipe___scheduledIn___internal___fieldOwners'
  | 'imagesRecipe___scheduledIn___internal___ignoreType'
  | 'imagesRecipe___scheduledIn___internal___mediaType'
  | 'imagesRecipe___scheduledIn___internal___owner'
  | 'imagesRecipe___scheduledIn___internal___type'
  | 'imagesRecipe___id'
  | 'imagesRecipe___parent___id'
  | 'imagesRecipe___parent___parent___id'
  | 'imagesRecipe___parent___parent___children'
  | 'imagesRecipe___parent___children'
  | 'imagesRecipe___parent___children___id'
  | 'imagesRecipe___parent___children___children'
  | 'imagesRecipe___parent___internal___content'
  | 'imagesRecipe___parent___internal___contentDigest'
  | 'imagesRecipe___parent___internal___description'
  | 'imagesRecipe___parent___internal___fieldOwners'
  | 'imagesRecipe___parent___internal___ignoreType'
  | 'imagesRecipe___parent___internal___mediaType'
  | 'imagesRecipe___parent___internal___owner'
  | 'imagesRecipe___parent___internal___type'
  | 'imagesRecipe___children'
  | 'imagesRecipe___children___id'
  | 'imagesRecipe___children___parent___id'
  | 'imagesRecipe___children___parent___children'
  | 'imagesRecipe___children___children'
  | 'imagesRecipe___children___children___id'
  | 'imagesRecipe___children___children___children'
  | 'imagesRecipe___children___internal___content'
  | 'imagesRecipe___children___internal___contentDigest'
  | 'imagesRecipe___children___internal___description'
  | 'imagesRecipe___children___internal___fieldOwners'
  | 'imagesRecipe___children___internal___ignoreType'
  | 'imagesRecipe___children___internal___mediaType'
  | 'imagesRecipe___children___internal___owner'
  | 'imagesRecipe___children___internal___type'
  | 'imagesRecipe___internal___content'
  | 'imagesRecipe___internal___contentDigest'
  | 'imagesRecipe___internal___description'
  | 'imagesRecipe___internal___fieldOwners'
  | 'imagesRecipe___internal___ignoreType'
  | 'imagesRecipe___internal___mediaType'
  | 'imagesRecipe___internal___owner'
  | 'imagesRecipe___internal___type'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___description'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_AssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_AssetGroupConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_AssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_UserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
};


export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserEdge = {
  next?: Maybe<GraphCms_User>;
  node: GraphCms_User;
  previous?: Maybe<GraphCms_User>;
};

export type GraphCms_UserFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'picture'
  | 'isActive'
  | 'kind'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_UserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_UserGroupConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_UserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_RecipeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_RecipeEdge>;
  nodes: Array<GraphCms_Recipe>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_RecipeGroupConnection>;
};


export type GraphCms_RecipeConnectionDistinctArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeConnectionMaxArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeConnectionMinArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeConnectionSumArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_RecipeFieldsEnum;
};

export type GraphCms_RecipeEdge = {
  next?: Maybe<GraphCms_Recipe>;
  node: GraphCms_Recipe;
  previous?: Maybe<GraphCms_Recipe>;
};

export type GraphCms_RecipeFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'title'
  | 'slug'
  | 'description'
  | 'tools'
  | 'source'
  | 'yields'
  | 'time'
  | 'overnight'
  | 'margaritasFavorite'
  | 'artemsFavorite'
  | 'ingredients'
  | 'steps'
  | 'notes'
  | 'leftovers'
  | 'privateNotes'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'images'
  | 'images___remoteTypeName'
  | 'images___remoteId'
  | 'images___locale'
  | 'images___stage'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images___publishedAt'
  | 'images___handle'
  | 'images___fileName'
  | 'images___height'
  | 'images___width'
  | 'images___size'
  | 'images___mimeType'
  | 'images___createdBy___remoteTypeName'
  | 'images___createdBy___remoteId'
  | 'images___createdBy___stage'
  | 'images___createdBy___createdAt'
  | 'images___createdBy___updatedAt'
  | 'images___createdBy___publishedAt'
  | 'images___createdBy___name'
  | 'images___createdBy___picture'
  | 'images___createdBy___isActive'
  | 'images___createdBy___kind'
  | 'images___createdBy___id'
  | 'images___createdBy___parent___id'
  | 'images___createdBy___parent___children'
  | 'images___createdBy___children'
  | 'images___createdBy___children___id'
  | 'images___createdBy___children___children'
  | 'images___createdBy___internal___content'
  | 'images___createdBy___internal___contentDigest'
  | 'images___createdBy___internal___description'
  | 'images___createdBy___internal___fieldOwners'
  | 'images___createdBy___internal___ignoreType'
  | 'images___createdBy___internal___mediaType'
  | 'images___createdBy___internal___owner'
  | 'images___createdBy___internal___type'
  | 'images___updatedBy___remoteTypeName'
  | 'images___updatedBy___remoteId'
  | 'images___updatedBy___stage'
  | 'images___updatedBy___createdAt'
  | 'images___updatedBy___updatedAt'
  | 'images___updatedBy___publishedAt'
  | 'images___updatedBy___name'
  | 'images___updatedBy___picture'
  | 'images___updatedBy___isActive'
  | 'images___updatedBy___kind'
  | 'images___updatedBy___id'
  | 'images___updatedBy___parent___id'
  | 'images___updatedBy___parent___children'
  | 'images___updatedBy___children'
  | 'images___updatedBy___children___id'
  | 'images___updatedBy___children___children'
  | 'images___updatedBy___internal___content'
  | 'images___updatedBy___internal___contentDigest'
  | 'images___updatedBy___internal___description'
  | 'images___updatedBy___internal___fieldOwners'
  | 'images___updatedBy___internal___ignoreType'
  | 'images___updatedBy___internal___mediaType'
  | 'images___updatedBy___internal___owner'
  | 'images___updatedBy___internal___type'
  | 'images___publishedBy___remoteTypeName'
  | 'images___publishedBy___remoteId'
  | 'images___publishedBy___stage'
  | 'images___publishedBy___createdAt'
  | 'images___publishedBy___updatedAt'
  | 'images___publishedBy___publishedAt'
  | 'images___publishedBy___name'
  | 'images___publishedBy___picture'
  | 'images___publishedBy___isActive'
  | 'images___publishedBy___kind'
  | 'images___publishedBy___id'
  | 'images___publishedBy___parent___id'
  | 'images___publishedBy___parent___children'
  | 'images___publishedBy___children'
  | 'images___publishedBy___children___id'
  | 'images___publishedBy___children___children'
  | 'images___publishedBy___internal___content'
  | 'images___publishedBy___internal___contentDigest'
  | 'images___publishedBy___internal___description'
  | 'images___publishedBy___internal___fieldOwners'
  | 'images___publishedBy___internal___ignoreType'
  | 'images___publishedBy___internal___mediaType'
  | 'images___publishedBy___internal___owner'
  | 'images___publishedBy___internal___type'
  | 'images___imagesRecipe'
  | 'images___imagesRecipe___remoteTypeName'
  | 'images___imagesRecipe___remoteId'
  | 'images___imagesRecipe___stage'
  | 'images___imagesRecipe___createdAt'
  | 'images___imagesRecipe___updatedAt'
  | 'images___imagesRecipe___publishedAt'
  | 'images___imagesRecipe___title'
  | 'images___imagesRecipe___slug'
  | 'images___imagesRecipe___description'
  | 'images___imagesRecipe___tools'
  | 'images___imagesRecipe___source'
  | 'images___imagesRecipe___yields'
  | 'images___imagesRecipe___time'
  | 'images___imagesRecipe___overnight'
  | 'images___imagesRecipe___margaritasFavorite'
  | 'images___imagesRecipe___artemsFavorite'
  | 'images___imagesRecipe___ingredients'
  | 'images___imagesRecipe___steps'
  | 'images___imagesRecipe___notes'
  | 'images___imagesRecipe___leftovers'
  | 'images___imagesRecipe___privateNotes'
  | 'images___imagesRecipe___createdBy___remoteTypeName'
  | 'images___imagesRecipe___createdBy___remoteId'
  | 'images___imagesRecipe___createdBy___stage'
  | 'images___imagesRecipe___createdBy___createdAt'
  | 'images___imagesRecipe___createdBy___updatedAt'
  | 'images___imagesRecipe___createdBy___publishedAt'
  | 'images___imagesRecipe___createdBy___name'
  | 'images___imagesRecipe___createdBy___picture'
  | 'images___imagesRecipe___createdBy___isActive'
  | 'images___imagesRecipe___createdBy___kind'
  | 'images___imagesRecipe___createdBy___id'
  | 'images___imagesRecipe___createdBy___children'
  | 'images___imagesRecipe___updatedBy___remoteTypeName'
  | 'images___imagesRecipe___updatedBy___remoteId'
  | 'images___imagesRecipe___updatedBy___stage'
  | 'images___imagesRecipe___updatedBy___createdAt'
  | 'images___imagesRecipe___updatedBy___updatedAt'
  | 'images___imagesRecipe___updatedBy___publishedAt'
  | 'images___imagesRecipe___updatedBy___name'
  | 'images___imagesRecipe___updatedBy___picture'
  | 'images___imagesRecipe___updatedBy___isActive'
  | 'images___imagesRecipe___updatedBy___kind'
  | 'images___imagesRecipe___updatedBy___id'
  | 'images___imagesRecipe___updatedBy___children'
  | 'images___imagesRecipe___publishedBy___remoteTypeName'
  | 'images___imagesRecipe___publishedBy___remoteId'
  | 'images___imagesRecipe___publishedBy___stage'
  | 'images___imagesRecipe___publishedBy___createdAt'
  | 'images___imagesRecipe___publishedBy___updatedAt'
  | 'images___imagesRecipe___publishedBy___publishedAt'
  | 'images___imagesRecipe___publishedBy___name'
  | 'images___imagesRecipe___publishedBy___picture'
  | 'images___imagesRecipe___publishedBy___isActive'
  | 'images___imagesRecipe___publishedBy___kind'
  | 'images___imagesRecipe___publishedBy___id'
  | 'images___imagesRecipe___publishedBy___children'
  | 'images___imagesRecipe___images'
  | 'images___imagesRecipe___images___remoteTypeName'
  | 'images___imagesRecipe___images___remoteId'
  | 'images___imagesRecipe___images___locale'
  | 'images___imagesRecipe___images___stage'
  | 'images___imagesRecipe___images___createdAt'
  | 'images___imagesRecipe___images___updatedAt'
  | 'images___imagesRecipe___images___publishedAt'
  | 'images___imagesRecipe___images___handle'
  | 'images___imagesRecipe___images___fileName'
  | 'images___imagesRecipe___images___height'
  | 'images___imagesRecipe___images___width'
  | 'images___imagesRecipe___images___size'
  | 'images___imagesRecipe___images___mimeType'
  | 'images___imagesRecipe___images___imagesRecipe'
  | 'images___imagesRecipe___images___scheduledIn'
  | 'images___imagesRecipe___images___url'
  | 'images___imagesRecipe___images___id'
  | 'images___imagesRecipe___images___children'
  | 'images___imagesRecipe___subrecipes'
  | 'images___imagesRecipe___subrecipes___remoteTypeName'
  | 'images___imagesRecipe___subrecipes___remoteId'
  | 'images___imagesRecipe___subrecipes___stage'
  | 'images___imagesRecipe___subrecipes___createdAt'
  | 'images___imagesRecipe___subrecipes___updatedAt'
  | 'images___imagesRecipe___subrecipes___publishedAt'
  | 'images___imagesRecipe___subrecipes___title'
  | 'images___imagesRecipe___subrecipes___slug'
  | 'images___imagesRecipe___subrecipes___description'
  | 'images___imagesRecipe___subrecipes___tools'
  | 'images___imagesRecipe___subrecipes___source'
  | 'images___imagesRecipe___subrecipes___yields'
  | 'images___imagesRecipe___subrecipes___time'
  | 'images___imagesRecipe___subrecipes___overnight'
  | 'images___imagesRecipe___subrecipes___margaritasFavorite'
  | 'images___imagesRecipe___subrecipes___artemsFavorite'
  | 'images___imagesRecipe___subrecipes___ingredients'
  | 'images___imagesRecipe___subrecipes___steps'
  | 'images___imagesRecipe___subrecipes___notes'
  | 'images___imagesRecipe___subrecipes___leftovers'
  | 'images___imagesRecipe___subrecipes___privateNotes'
  | 'images___imagesRecipe___subrecipes___images'
  | 'images___imagesRecipe___subrecipes___subrecipes'
  | 'images___imagesRecipe___subrecipes___cuisines'
  | 'images___imagesRecipe___subrecipes___tags'
  | 'images___imagesRecipe___subrecipes___difficulty'
  | 'images___imagesRecipe___subrecipes___scheduledIn'
  | 'images___imagesRecipe___subrecipes___id'
  | 'images___imagesRecipe___subrecipes___children'
  | 'images___imagesRecipe___recipes___remoteTypeName'
  | 'images___imagesRecipe___recipes___remoteId'
  | 'images___imagesRecipe___recipes___stage'
  | 'images___imagesRecipe___recipes___createdAt'
  | 'images___imagesRecipe___recipes___updatedAt'
  | 'images___imagesRecipe___recipes___publishedAt'
  | 'images___imagesRecipe___recipes___title'
  | 'images___imagesRecipe___recipes___slug'
  | 'images___imagesRecipe___recipes___description'
  | 'images___imagesRecipe___recipes___tools'
  | 'images___imagesRecipe___recipes___source'
  | 'images___imagesRecipe___recipes___yields'
  | 'images___imagesRecipe___recipes___time'
  | 'images___imagesRecipe___recipes___overnight'
  | 'images___imagesRecipe___recipes___margaritasFavorite'
  | 'images___imagesRecipe___recipes___artemsFavorite'
  | 'images___imagesRecipe___recipes___ingredients'
  | 'images___imagesRecipe___recipes___steps'
  | 'images___imagesRecipe___recipes___notes'
  | 'images___imagesRecipe___recipes___leftovers'
  | 'images___imagesRecipe___recipes___privateNotes'
  | 'images___imagesRecipe___recipes___images'
  | 'images___imagesRecipe___recipes___subrecipes'
  | 'images___imagesRecipe___recipes___cuisines'
  | 'images___imagesRecipe___recipes___tags'
  | 'images___imagesRecipe___recipes___difficulty'
  | 'images___imagesRecipe___recipes___scheduledIn'
  | 'images___imagesRecipe___recipes___id'
  | 'images___imagesRecipe___recipes___children'
  | 'images___imagesRecipe___cuisines'
  | 'images___imagesRecipe___tags'
  | 'images___imagesRecipe___difficulty'
  | 'images___imagesRecipe___scheduledIn'
  | 'images___imagesRecipe___scheduledIn___remoteTypeName'
  | 'images___imagesRecipe___scheduledIn___remoteId'
  | 'images___imagesRecipe___scheduledIn___stage'
  | 'images___imagesRecipe___scheduledIn___createdAt'
  | 'images___imagesRecipe___scheduledIn___updatedAt'
  | 'images___imagesRecipe___scheduledIn___publishedAt'
  | 'images___imagesRecipe___scheduledIn___description'
  | 'images___imagesRecipe___scheduledIn___errorMessage'
  | 'images___imagesRecipe___scheduledIn___rawPayload'
  | 'images___imagesRecipe___scheduledIn___status'
  | 'images___imagesRecipe___scheduledIn___id'
  | 'images___imagesRecipe___scheduledIn___children'
  | 'images___imagesRecipe___id'
  | 'images___imagesRecipe___parent___id'
  | 'images___imagesRecipe___parent___children'
  | 'images___imagesRecipe___children'
  | 'images___imagesRecipe___children___id'
  | 'images___imagesRecipe___children___children'
  | 'images___imagesRecipe___internal___content'
  | 'images___imagesRecipe___internal___contentDigest'
  | 'images___imagesRecipe___internal___description'
  | 'images___imagesRecipe___internal___fieldOwners'
  | 'images___imagesRecipe___internal___ignoreType'
  | 'images___imagesRecipe___internal___mediaType'
  | 'images___imagesRecipe___internal___owner'
  | 'images___imagesRecipe___internal___type'
  | 'images___scheduledIn'
  | 'images___scheduledIn___remoteTypeName'
  | 'images___scheduledIn___remoteId'
  | 'images___scheduledIn___stage'
  | 'images___scheduledIn___createdAt'
  | 'images___scheduledIn___updatedAt'
  | 'images___scheduledIn___publishedAt'
  | 'images___scheduledIn___description'
  | 'images___scheduledIn___errorMessage'
  | 'images___scheduledIn___rawPayload'
  | 'images___scheduledIn___createdBy___remoteTypeName'
  | 'images___scheduledIn___createdBy___remoteId'
  | 'images___scheduledIn___createdBy___stage'
  | 'images___scheduledIn___createdBy___createdAt'
  | 'images___scheduledIn___createdBy___updatedAt'
  | 'images___scheduledIn___createdBy___publishedAt'
  | 'images___scheduledIn___createdBy___name'
  | 'images___scheduledIn___createdBy___picture'
  | 'images___scheduledIn___createdBy___isActive'
  | 'images___scheduledIn___createdBy___kind'
  | 'images___scheduledIn___createdBy___id'
  | 'images___scheduledIn___createdBy___children'
  | 'images___scheduledIn___updatedBy___remoteTypeName'
  | 'images___scheduledIn___updatedBy___remoteId'
  | 'images___scheduledIn___updatedBy___stage'
  | 'images___scheduledIn___updatedBy___createdAt'
  | 'images___scheduledIn___updatedBy___updatedAt'
  | 'images___scheduledIn___updatedBy___publishedAt'
  | 'images___scheduledIn___updatedBy___name'
  | 'images___scheduledIn___updatedBy___picture'
  | 'images___scheduledIn___updatedBy___isActive'
  | 'images___scheduledIn___updatedBy___kind'
  | 'images___scheduledIn___updatedBy___id'
  | 'images___scheduledIn___updatedBy___children'
  | 'images___scheduledIn___publishedBy___remoteTypeName'
  | 'images___scheduledIn___publishedBy___remoteId'
  | 'images___scheduledIn___publishedBy___stage'
  | 'images___scheduledIn___publishedBy___createdAt'
  | 'images___scheduledIn___publishedBy___updatedAt'
  | 'images___scheduledIn___publishedBy___publishedAt'
  | 'images___scheduledIn___publishedBy___name'
  | 'images___scheduledIn___publishedBy___picture'
  | 'images___scheduledIn___publishedBy___isActive'
  | 'images___scheduledIn___publishedBy___kind'
  | 'images___scheduledIn___publishedBy___id'
  | 'images___scheduledIn___publishedBy___children'
  | 'images___scheduledIn___release___remoteTypeName'
  | 'images___scheduledIn___release___remoteId'
  | 'images___scheduledIn___release___stage'
  | 'images___scheduledIn___release___createdAt'
  | 'images___scheduledIn___release___updatedAt'
  | 'images___scheduledIn___release___publishedAt'
  | 'images___scheduledIn___release___title'
  | 'images___scheduledIn___release___description'
  | 'images___scheduledIn___release___errorMessage'
  | 'images___scheduledIn___release___isActive'
  | 'images___scheduledIn___release___isImplicit'
  | 'images___scheduledIn___release___releaseAt'
  | 'images___scheduledIn___release___operations'
  | 'images___scheduledIn___release___status'
  | 'images___scheduledIn___release___id'
  | 'images___scheduledIn___release___children'
  | 'images___scheduledIn___status'
  | 'images___scheduledIn___id'
  | 'images___scheduledIn___parent___id'
  | 'images___scheduledIn___parent___children'
  | 'images___scheduledIn___children'
  | 'images___scheduledIn___children___id'
  | 'images___scheduledIn___children___children'
  | 'images___scheduledIn___internal___content'
  | 'images___scheduledIn___internal___contentDigest'
  | 'images___scheduledIn___internal___description'
  | 'images___scheduledIn___internal___fieldOwners'
  | 'images___scheduledIn___internal___ignoreType'
  | 'images___scheduledIn___internal___mediaType'
  | 'images___scheduledIn___internal___owner'
  | 'images___scheduledIn___internal___type'
  | 'images___url'
  | 'images___id'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'subrecipes'
  | 'subrecipes___remoteTypeName'
  | 'subrecipes___remoteId'
  | 'subrecipes___stage'
  | 'subrecipes___createdAt'
  | 'subrecipes___updatedAt'
  | 'subrecipes___publishedAt'
  | 'subrecipes___title'
  | 'subrecipes___slug'
  | 'subrecipes___description'
  | 'subrecipes___tools'
  | 'subrecipes___source'
  | 'subrecipes___yields'
  | 'subrecipes___time'
  | 'subrecipes___overnight'
  | 'subrecipes___margaritasFavorite'
  | 'subrecipes___artemsFavorite'
  | 'subrecipes___ingredients'
  | 'subrecipes___steps'
  | 'subrecipes___notes'
  | 'subrecipes___leftovers'
  | 'subrecipes___privateNotes'
  | 'subrecipes___createdBy___remoteTypeName'
  | 'subrecipes___createdBy___remoteId'
  | 'subrecipes___createdBy___stage'
  | 'subrecipes___createdBy___createdAt'
  | 'subrecipes___createdBy___updatedAt'
  | 'subrecipes___createdBy___publishedAt'
  | 'subrecipes___createdBy___name'
  | 'subrecipes___createdBy___picture'
  | 'subrecipes___createdBy___isActive'
  | 'subrecipes___createdBy___kind'
  | 'subrecipes___createdBy___id'
  | 'subrecipes___createdBy___parent___id'
  | 'subrecipes___createdBy___parent___children'
  | 'subrecipes___createdBy___children'
  | 'subrecipes___createdBy___children___id'
  | 'subrecipes___createdBy___children___children'
  | 'subrecipes___createdBy___internal___content'
  | 'subrecipes___createdBy___internal___contentDigest'
  | 'subrecipes___createdBy___internal___description'
  | 'subrecipes___createdBy___internal___fieldOwners'
  | 'subrecipes___createdBy___internal___ignoreType'
  | 'subrecipes___createdBy___internal___mediaType'
  | 'subrecipes___createdBy___internal___owner'
  | 'subrecipes___createdBy___internal___type'
  | 'subrecipes___updatedBy___remoteTypeName'
  | 'subrecipes___updatedBy___remoteId'
  | 'subrecipes___updatedBy___stage'
  | 'subrecipes___updatedBy___createdAt'
  | 'subrecipes___updatedBy___updatedAt'
  | 'subrecipes___updatedBy___publishedAt'
  | 'subrecipes___updatedBy___name'
  | 'subrecipes___updatedBy___picture'
  | 'subrecipes___updatedBy___isActive'
  | 'subrecipes___updatedBy___kind'
  | 'subrecipes___updatedBy___id'
  | 'subrecipes___updatedBy___parent___id'
  | 'subrecipes___updatedBy___parent___children'
  | 'subrecipes___updatedBy___children'
  | 'subrecipes___updatedBy___children___id'
  | 'subrecipes___updatedBy___children___children'
  | 'subrecipes___updatedBy___internal___content'
  | 'subrecipes___updatedBy___internal___contentDigest'
  | 'subrecipes___updatedBy___internal___description'
  | 'subrecipes___updatedBy___internal___fieldOwners'
  | 'subrecipes___updatedBy___internal___ignoreType'
  | 'subrecipes___updatedBy___internal___mediaType'
  | 'subrecipes___updatedBy___internal___owner'
  | 'subrecipes___updatedBy___internal___type'
  | 'subrecipes___publishedBy___remoteTypeName'
  | 'subrecipes___publishedBy___remoteId'
  | 'subrecipes___publishedBy___stage'
  | 'subrecipes___publishedBy___createdAt'
  | 'subrecipes___publishedBy___updatedAt'
  | 'subrecipes___publishedBy___publishedAt'
  | 'subrecipes___publishedBy___name'
  | 'subrecipes___publishedBy___picture'
  | 'subrecipes___publishedBy___isActive'
  | 'subrecipes___publishedBy___kind'
  | 'subrecipes___publishedBy___id'
  | 'subrecipes___publishedBy___parent___id'
  | 'subrecipes___publishedBy___parent___children'
  | 'subrecipes___publishedBy___children'
  | 'subrecipes___publishedBy___children___id'
  | 'subrecipes___publishedBy___children___children'
  | 'subrecipes___publishedBy___internal___content'
  | 'subrecipes___publishedBy___internal___contentDigest'
  | 'subrecipes___publishedBy___internal___description'
  | 'subrecipes___publishedBy___internal___fieldOwners'
  | 'subrecipes___publishedBy___internal___ignoreType'
  | 'subrecipes___publishedBy___internal___mediaType'
  | 'subrecipes___publishedBy___internal___owner'
  | 'subrecipes___publishedBy___internal___type'
  | 'subrecipes___images'
  | 'subrecipes___images___remoteTypeName'
  | 'subrecipes___images___remoteId'
  | 'subrecipes___images___locale'
  | 'subrecipes___images___stage'
  | 'subrecipes___images___createdAt'
  | 'subrecipes___images___updatedAt'
  | 'subrecipes___images___publishedAt'
  | 'subrecipes___images___handle'
  | 'subrecipes___images___fileName'
  | 'subrecipes___images___height'
  | 'subrecipes___images___width'
  | 'subrecipes___images___size'
  | 'subrecipes___images___mimeType'
  | 'subrecipes___images___createdBy___remoteTypeName'
  | 'subrecipes___images___createdBy___remoteId'
  | 'subrecipes___images___createdBy___stage'
  | 'subrecipes___images___createdBy___createdAt'
  | 'subrecipes___images___createdBy___updatedAt'
  | 'subrecipes___images___createdBy___publishedAt'
  | 'subrecipes___images___createdBy___name'
  | 'subrecipes___images___createdBy___picture'
  | 'subrecipes___images___createdBy___isActive'
  | 'subrecipes___images___createdBy___kind'
  | 'subrecipes___images___createdBy___id'
  | 'subrecipes___images___createdBy___children'
  | 'subrecipes___images___updatedBy___remoteTypeName'
  | 'subrecipes___images___updatedBy___remoteId'
  | 'subrecipes___images___updatedBy___stage'
  | 'subrecipes___images___updatedBy___createdAt'
  | 'subrecipes___images___updatedBy___updatedAt'
  | 'subrecipes___images___updatedBy___publishedAt'
  | 'subrecipes___images___updatedBy___name'
  | 'subrecipes___images___updatedBy___picture'
  | 'subrecipes___images___updatedBy___isActive'
  | 'subrecipes___images___updatedBy___kind'
  | 'subrecipes___images___updatedBy___id'
  | 'subrecipes___images___updatedBy___children'
  | 'subrecipes___images___publishedBy___remoteTypeName'
  | 'subrecipes___images___publishedBy___remoteId'
  | 'subrecipes___images___publishedBy___stage'
  | 'subrecipes___images___publishedBy___createdAt'
  | 'subrecipes___images___publishedBy___updatedAt'
  | 'subrecipes___images___publishedBy___publishedAt'
  | 'subrecipes___images___publishedBy___name'
  | 'subrecipes___images___publishedBy___picture'
  | 'subrecipes___images___publishedBy___isActive'
  | 'subrecipes___images___publishedBy___kind'
  | 'subrecipes___images___publishedBy___id'
  | 'subrecipes___images___publishedBy___children'
  | 'subrecipes___images___imagesRecipe'
  | 'subrecipes___images___imagesRecipe___remoteTypeName'
  | 'subrecipes___images___imagesRecipe___remoteId'
  | 'subrecipes___images___imagesRecipe___stage'
  | 'subrecipes___images___imagesRecipe___createdAt'
  | 'subrecipes___images___imagesRecipe___updatedAt'
  | 'subrecipes___images___imagesRecipe___publishedAt'
  | 'subrecipes___images___imagesRecipe___title'
  | 'subrecipes___images___imagesRecipe___slug'
  | 'subrecipes___images___imagesRecipe___description'
  | 'subrecipes___images___imagesRecipe___tools'
  | 'subrecipes___images___imagesRecipe___source'
  | 'subrecipes___images___imagesRecipe___yields'
  | 'subrecipes___images___imagesRecipe___time'
  | 'subrecipes___images___imagesRecipe___overnight'
  | 'subrecipes___images___imagesRecipe___margaritasFavorite'
  | 'subrecipes___images___imagesRecipe___artemsFavorite'
  | 'subrecipes___images___imagesRecipe___ingredients'
  | 'subrecipes___images___imagesRecipe___steps'
  | 'subrecipes___images___imagesRecipe___notes'
  | 'subrecipes___images___imagesRecipe___leftovers'
  | 'subrecipes___images___imagesRecipe___privateNotes'
  | 'subrecipes___images___imagesRecipe___images'
  | 'subrecipes___images___imagesRecipe___subrecipes'
  | 'subrecipes___images___imagesRecipe___cuisines'
  | 'subrecipes___images___imagesRecipe___tags'
  | 'subrecipes___images___imagesRecipe___difficulty'
  | 'subrecipes___images___imagesRecipe___scheduledIn'
  | 'subrecipes___images___imagesRecipe___id'
  | 'subrecipes___images___imagesRecipe___children'
  | 'subrecipes___images___scheduledIn'
  | 'subrecipes___images___scheduledIn___remoteTypeName'
  | 'subrecipes___images___scheduledIn___remoteId'
  | 'subrecipes___images___scheduledIn___stage'
  | 'subrecipes___images___scheduledIn___createdAt'
  | 'subrecipes___images___scheduledIn___updatedAt'
  | 'subrecipes___images___scheduledIn___publishedAt'
  | 'subrecipes___images___scheduledIn___description'
  | 'subrecipes___images___scheduledIn___errorMessage'
  | 'subrecipes___images___scheduledIn___rawPayload'
  | 'subrecipes___images___scheduledIn___status'
  | 'subrecipes___images___scheduledIn___id'
  | 'subrecipes___images___scheduledIn___children'
  | 'subrecipes___images___url'
  | 'subrecipes___images___id'
  | 'subrecipes___images___parent___id'
  | 'subrecipes___images___parent___children'
  | 'subrecipes___images___children'
  | 'subrecipes___images___children___id'
  | 'subrecipes___images___children___children'
  | 'subrecipes___images___internal___content'
  | 'subrecipes___images___internal___contentDigest'
  | 'subrecipes___images___internal___description'
  | 'subrecipes___images___internal___fieldOwners'
  | 'subrecipes___images___internal___ignoreType'
  | 'subrecipes___images___internal___mediaType'
  | 'subrecipes___images___internal___owner'
  | 'subrecipes___images___internal___type'
  | 'subrecipes___subrecipes'
  | 'subrecipes___subrecipes___remoteTypeName'
  | 'subrecipes___subrecipes___remoteId'
  | 'subrecipes___subrecipes___stage'
  | 'subrecipes___subrecipes___createdAt'
  | 'subrecipes___subrecipes___updatedAt'
  | 'subrecipes___subrecipes___publishedAt'
  | 'subrecipes___subrecipes___title'
  | 'subrecipes___subrecipes___slug'
  | 'subrecipes___subrecipes___description'
  | 'subrecipes___subrecipes___tools'
  | 'subrecipes___subrecipes___source'
  | 'subrecipes___subrecipes___yields'
  | 'subrecipes___subrecipes___time'
  | 'subrecipes___subrecipes___overnight'
  | 'subrecipes___subrecipes___margaritasFavorite'
  | 'subrecipes___subrecipes___artemsFavorite'
  | 'subrecipes___subrecipes___ingredients'
  | 'subrecipes___subrecipes___steps'
  | 'subrecipes___subrecipes___notes'
  | 'subrecipes___subrecipes___leftovers'
  | 'subrecipes___subrecipes___privateNotes'
  | 'subrecipes___subrecipes___createdBy___remoteTypeName'
  | 'subrecipes___subrecipes___createdBy___remoteId'
  | 'subrecipes___subrecipes___createdBy___stage'
  | 'subrecipes___subrecipes___createdBy___createdAt'
  | 'subrecipes___subrecipes___createdBy___updatedAt'
  | 'subrecipes___subrecipes___createdBy___publishedAt'
  | 'subrecipes___subrecipes___createdBy___name'
  | 'subrecipes___subrecipes___createdBy___picture'
  | 'subrecipes___subrecipes___createdBy___isActive'
  | 'subrecipes___subrecipes___createdBy___kind'
  | 'subrecipes___subrecipes___createdBy___id'
  | 'subrecipes___subrecipes___createdBy___children'
  | 'subrecipes___subrecipes___updatedBy___remoteTypeName'
  | 'subrecipes___subrecipes___updatedBy___remoteId'
  | 'subrecipes___subrecipes___updatedBy___stage'
  | 'subrecipes___subrecipes___updatedBy___createdAt'
  | 'subrecipes___subrecipes___updatedBy___updatedAt'
  | 'subrecipes___subrecipes___updatedBy___publishedAt'
  | 'subrecipes___subrecipes___updatedBy___name'
  | 'subrecipes___subrecipes___updatedBy___picture'
  | 'subrecipes___subrecipes___updatedBy___isActive'
  | 'subrecipes___subrecipes___updatedBy___kind'
  | 'subrecipes___subrecipes___updatedBy___id'
  | 'subrecipes___subrecipes___updatedBy___children'
  | 'subrecipes___subrecipes___publishedBy___remoteTypeName'
  | 'subrecipes___subrecipes___publishedBy___remoteId'
  | 'subrecipes___subrecipes___publishedBy___stage'
  | 'subrecipes___subrecipes___publishedBy___createdAt'
  | 'subrecipes___subrecipes___publishedBy___updatedAt'
  | 'subrecipes___subrecipes___publishedBy___publishedAt'
  | 'subrecipes___subrecipes___publishedBy___name'
  | 'subrecipes___subrecipes___publishedBy___picture'
  | 'subrecipes___subrecipes___publishedBy___isActive'
  | 'subrecipes___subrecipes___publishedBy___kind'
  | 'subrecipes___subrecipes___publishedBy___id'
  | 'subrecipes___subrecipes___publishedBy___children'
  | 'subrecipes___subrecipes___images'
  | 'subrecipes___subrecipes___images___remoteTypeName'
  | 'subrecipes___subrecipes___images___remoteId'
  | 'subrecipes___subrecipes___images___locale'
  | 'subrecipes___subrecipes___images___stage'
  | 'subrecipes___subrecipes___images___createdAt'
  | 'subrecipes___subrecipes___images___updatedAt'
  | 'subrecipes___subrecipes___images___publishedAt'
  | 'subrecipes___subrecipes___images___handle'
  | 'subrecipes___subrecipes___images___fileName'
  | 'subrecipes___subrecipes___images___height'
  | 'subrecipes___subrecipes___images___width'
  | 'subrecipes___subrecipes___images___size'
  | 'subrecipes___subrecipes___images___mimeType'
  | 'subrecipes___subrecipes___images___imagesRecipe'
  | 'subrecipes___subrecipes___images___scheduledIn'
  | 'subrecipes___subrecipes___images___url'
  | 'subrecipes___subrecipes___images___id'
  | 'subrecipes___subrecipes___images___children'
  | 'subrecipes___subrecipes___subrecipes'
  | 'subrecipes___subrecipes___subrecipes___remoteTypeName'
  | 'subrecipes___subrecipes___subrecipes___remoteId'
  | 'subrecipes___subrecipes___subrecipes___stage'
  | 'subrecipes___subrecipes___subrecipes___createdAt'
  | 'subrecipes___subrecipes___subrecipes___updatedAt'
  | 'subrecipes___subrecipes___subrecipes___publishedAt'
  | 'subrecipes___subrecipes___subrecipes___title'
  | 'subrecipes___subrecipes___subrecipes___slug'
  | 'subrecipes___subrecipes___subrecipes___description'
  | 'subrecipes___subrecipes___subrecipes___tools'
  | 'subrecipes___subrecipes___subrecipes___source'
  | 'subrecipes___subrecipes___subrecipes___yields'
  | 'subrecipes___subrecipes___subrecipes___time'
  | 'subrecipes___subrecipes___subrecipes___overnight'
  | 'subrecipes___subrecipes___subrecipes___margaritasFavorite'
  | 'subrecipes___subrecipes___subrecipes___artemsFavorite'
  | 'subrecipes___subrecipes___subrecipes___ingredients'
  | 'subrecipes___subrecipes___subrecipes___steps'
  | 'subrecipes___subrecipes___subrecipes___notes'
  | 'subrecipes___subrecipes___subrecipes___leftovers'
  | 'subrecipes___subrecipes___subrecipes___privateNotes'
  | 'subrecipes___subrecipes___subrecipes___images'
  | 'subrecipes___subrecipes___subrecipes___subrecipes'
  | 'subrecipes___subrecipes___subrecipes___cuisines'
  | 'subrecipes___subrecipes___subrecipes___tags'
  | 'subrecipes___subrecipes___subrecipes___difficulty'
  | 'subrecipes___subrecipes___subrecipes___scheduledIn'
  | 'subrecipes___subrecipes___subrecipes___id'
  | 'subrecipes___subrecipes___subrecipes___children'
  | 'subrecipes___subrecipes___recipes___remoteTypeName'
  | 'subrecipes___subrecipes___recipes___remoteId'
  | 'subrecipes___subrecipes___recipes___stage'
  | 'subrecipes___subrecipes___recipes___createdAt'
  | 'subrecipes___subrecipes___recipes___updatedAt'
  | 'subrecipes___subrecipes___recipes___publishedAt'
  | 'subrecipes___subrecipes___recipes___title'
  | 'subrecipes___subrecipes___recipes___slug'
  | 'subrecipes___subrecipes___recipes___description'
  | 'subrecipes___subrecipes___recipes___tools'
  | 'subrecipes___subrecipes___recipes___source'
  | 'subrecipes___subrecipes___recipes___yields'
  | 'subrecipes___subrecipes___recipes___time'
  | 'subrecipes___subrecipes___recipes___overnight'
  | 'subrecipes___subrecipes___recipes___margaritasFavorite'
  | 'subrecipes___subrecipes___recipes___artemsFavorite'
  | 'subrecipes___subrecipes___recipes___ingredients'
  | 'subrecipes___subrecipes___recipes___steps'
  | 'subrecipes___subrecipes___recipes___notes'
  | 'subrecipes___subrecipes___recipes___leftovers'
  | 'subrecipes___subrecipes___recipes___privateNotes'
  | 'subrecipes___subrecipes___recipes___images'
  | 'subrecipes___subrecipes___recipes___subrecipes'
  | 'subrecipes___subrecipes___recipes___cuisines'
  | 'subrecipes___subrecipes___recipes___tags'
  | 'subrecipes___subrecipes___recipes___difficulty'
  | 'subrecipes___subrecipes___recipes___scheduledIn'
  | 'subrecipes___subrecipes___recipes___id'
  | 'subrecipes___subrecipes___recipes___children'
  | 'subrecipes___subrecipes___cuisines'
  | 'subrecipes___subrecipes___tags'
  | 'subrecipes___subrecipes___difficulty'
  | 'subrecipes___subrecipes___scheduledIn'
  | 'subrecipes___subrecipes___scheduledIn___remoteTypeName'
  | 'subrecipes___subrecipes___scheduledIn___remoteId'
  | 'subrecipes___subrecipes___scheduledIn___stage'
  | 'subrecipes___subrecipes___scheduledIn___createdAt'
  | 'subrecipes___subrecipes___scheduledIn___updatedAt'
  | 'subrecipes___subrecipes___scheduledIn___publishedAt'
  | 'subrecipes___subrecipes___scheduledIn___description'
  | 'subrecipes___subrecipes___scheduledIn___errorMessage'
  | 'subrecipes___subrecipes___scheduledIn___rawPayload'
  | 'subrecipes___subrecipes___scheduledIn___status'
  | 'subrecipes___subrecipes___scheduledIn___id'
  | 'subrecipes___subrecipes___scheduledIn___children'
  | 'subrecipes___subrecipes___id'
  | 'subrecipes___subrecipes___parent___id'
  | 'subrecipes___subrecipes___parent___children'
  | 'subrecipes___subrecipes___children'
  | 'subrecipes___subrecipes___children___id'
  | 'subrecipes___subrecipes___children___children'
  | 'subrecipes___subrecipes___internal___content'
  | 'subrecipes___subrecipes___internal___contentDigest'
  | 'subrecipes___subrecipes___internal___description'
  | 'subrecipes___subrecipes___internal___fieldOwners'
  | 'subrecipes___subrecipes___internal___ignoreType'
  | 'subrecipes___subrecipes___internal___mediaType'
  | 'subrecipes___subrecipes___internal___owner'
  | 'subrecipes___subrecipes___internal___type'
  | 'subrecipes___recipes___remoteTypeName'
  | 'subrecipes___recipes___remoteId'
  | 'subrecipes___recipes___stage'
  | 'subrecipes___recipes___createdAt'
  | 'subrecipes___recipes___updatedAt'
  | 'subrecipes___recipes___publishedAt'
  | 'subrecipes___recipes___title'
  | 'subrecipes___recipes___slug'
  | 'subrecipes___recipes___description'
  | 'subrecipes___recipes___tools'
  | 'subrecipes___recipes___source'
  | 'subrecipes___recipes___yields'
  | 'subrecipes___recipes___time'
  | 'subrecipes___recipes___overnight'
  | 'subrecipes___recipes___margaritasFavorite'
  | 'subrecipes___recipes___artemsFavorite'
  | 'subrecipes___recipes___ingredients'
  | 'subrecipes___recipes___steps'
  | 'subrecipes___recipes___notes'
  | 'subrecipes___recipes___leftovers'
  | 'subrecipes___recipes___privateNotes'
  | 'subrecipes___recipes___createdBy___remoteTypeName'
  | 'subrecipes___recipes___createdBy___remoteId'
  | 'subrecipes___recipes___createdBy___stage'
  | 'subrecipes___recipes___createdBy___createdAt'
  | 'subrecipes___recipes___createdBy___updatedAt'
  | 'subrecipes___recipes___createdBy___publishedAt'
  | 'subrecipes___recipes___createdBy___name'
  | 'subrecipes___recipes___createdBy___picture'
  | 'subrecipes___recipes___createdBy___isActive'
  | 'subrecipes___recipes___createdBy___kind'
  | 'subrecipes___recipes___createdBy___id'
  | 'subrecipes___recipes___createdBy___children'
  | 'subrecipes___recipes___updatedBy___remoteTypeName'
  | 'subrecipes___recipes___updatedBy___remoteId'
  | 'subrecipes___recipes___updatedBy___stage'
  | 'subrecipes___recipes___updatedBy___createdAt'
  | 'subrecipes___recipes___updatedBy___updatedAt'
  | 'subrecipes___recipes___updatedBy___publishedAt'
  | 'subrecipes___recipes___updatedBy___name'
  | 'subrecipes___recipes___updatedBy___picture'
  | 'subrecipes___recipes___updatedBy___isActive'
  | 'subrecipes___recipes___updatedBy___kind'
  | 'subrecipes___recipes___updatedBy___id'
  | 'subrecipes___recipes___updatedBy___children'
  | 'subrecipes___recipes___publishedBy___remoteTypeName'
  | 'subrecipes___recipes___publishedBy___remoteId'
  | 'subrecipes___recipes___publishedBy___stage'
  | 'subrecipes___recipes___publishedBy___createdAt'
  | 'subrecipes___recipes___publishedBy___updatedAt'
  | 'subrecipes___recipes___publishedBy___publishedAt'
  | 'subrecipes___recipes___publishedBy___name'
  | 'subrecipes___recipes___publishedBy___picture'
  | 'subrecipes___recipes___publishedBy___isActive'
  | 'subrecipes___recipes___publishedBy___kind'
  | 'subrecipes___recipes___publishedBy___id'
  | 'subrecipes___recipes___publishedBy___children'
  | 'subrecipes___recipes___images'
  | 'subrecipes___recipes___images___remoteTypeName'
  | 'subrecipes___recipes___images___remoteId'
  | 'subrecipes___recipes___images___locale'
  | 'subrecipes___recipes___images___stage'
  | 'subrecipes___recipes___images___createdAt'
  | 'subrecipes___recipes___images___updatedAt'
  | 'subrecipes___recipes___images___publishedAt'
  | 'subrecipes___recipes___images___handle'
  | 'subrecipes___recipes___images___fileName'
  | 'subrecipes___recipes___images___height'
  | 'subrecipes___recipes___images___width'
  | 'subrecipes___recipes___images___size'
  | 'subrecipes___recipes___images___mimeType'
  | 'subrecipes___recipes___images___imagesRecipe'
  | 'subrecipes___recipes___images___scheduledIn'
  | 'subrecipes___recipes___images___url'
  | 'subrecipes___recipes___images___id'
  | 'subrecipes___recipes___images___children'
  | 'subrecipes___recipes___subrecipes'
  | 'subrecipes___recipes___subrecipes___remoteTypeName'
  | 'subrecipes___recipes___subrecipes___remoteId'
  | 'subrecipes___recipes___subrecipes___stage'
  | 'subrecipes___recipes___subrecipes___createdAt'
  | 'subrecipes___recipes___subrecipes___updatedAt'
  | 'subrecipes___recipes___subrecipes___publishedAt'
  | 'subrecipes___recipes___subrecipes___title'
  | 'subrecipes___recipes___subrecipes___slug'
  | 'subrecipes___recipes___subrecipes___description'
  | 'subrecipes___recipes___subrecipes___tools'
  | 'subrecipes___recipes___subrecipes___source'
  | 'subrecipes___recipes___subrecipes___yields'
  | 'subrecipes___recipes___subrecipes___time'
  | 'subrecipes___recipes___subrecipes___overnight'
  | 'subrecipes___recipes___subrecipes___margaritasFavorite'
  | 'subrecipes___recipes___subrecipes___artemsFavorite'
  | 'subrecipes___recipes___subrecipes___ingredients'
  | 'subrecipes___recipes___subrecipes___steps'
  | 'subrecipes___recipes___subrecipes___notes'
  | 'subrecipes___recipes___subrecipes___leftovers'
  | 'subrecipes___recipes___subrecipes___privateNotes'
  | 'subrecipes___recipes___subrecipes___images'
  | 'subrecipes___recipes___subrecipes___subrecipes'
  | 'subrecipes___recipes___subrecipes___cuisines'
  | 'subrecipes___recipes___subrecipes___tags'
  | 'subrecipes___recipes___subrecipes___difficulty'
  | 'subrecipes___recipes___subrecipes___scheduledIn'
  | 'subrecipes___recipes___subrecipes___id'
  | 'subrecipes___recipes___subrecipes___children'
  | 'subrecipes___recipes___recipes___remoteTypeName'
  | 'subrecipes___recipes___recipes___remoteId'
  | 'subrecipes___recipes___recipes___stage'
  | 'subrecipes___recipes___recipes___createdAt'
  | 'subrecipes___recipes___recipes___updatedAt'
  | 'subrecipes___recipes___recipes___publishedAt'
  | 'subrecipes___recipes___recipes___title'
  | 'subrecipes___recipes___recipes___slug'
  | 'subrecipes___recipes___recipes___description'
  | 'subrecipes___recipes___recipes___tools'
  | 'subrecipes___recipes___recipes___source'
  | 'subrecipes___recipes___recipes___yields'
  | 'subrecipes___recipes___recipes___time'
  | 'subrecipes___recipes___recipes___overnight'
  | 'subrecipes___recipes___recipes___margaritasFavorite'
  | 'subrecipes___recipes___recipes___artemsFavorite'
  | 'subrecipes___recipes___recipes___ingredients'
  | 'subrecipes___recipes___recipes___steps'
  | 'subrecipes___recipes___recipes___notes'
  | 'subrecipes___recipes___recipes___leftovers'
  | 'subrecipes___recipes___recipes___privateNotes'
  | 'subrecipes___recipes___recipes___images'
  | 'subrecipes___recipes___recipes___subrecipes'
  | 'subrecipes___recipes___recipes___cuisines'
  | 'subrecipes___recipes___recipes___tags'
  | 'subrecipes___recipes___recipes___difficulty'
  | 'subrecipes___recipes___recipes___scheduledIn'
  | 'subrecipes___recipes___recipes___id'
  | 'subrecipes___recipes___recipes___children'
  | 'subrecipes___recipes___cuisines'
  | 'subrecipes___recipes___tags'
  | 'subrecipes___recipes___difficulty'
  | 'subrecipes___recipes___scheduledIn'
  | 'subrecipes___recipes___scheduledIn___remoteTypeName'
  | 'subrecipes___recipes___scheduledIn___remoteId'
  | 'subrecipes___recipes___scheduledIn___stage'
  | 'subrecipes___recipes___scheduledIn___createdAt'
  | 'subrecipes___recipes___scheduledIn___updatedAt'
  | 'subrecipes___recipes___scheduledIn___publishedAt'
  | 'subrecipes___recipes___scheduledIn___description'
  | 'subrecipes___recipes___scheduledIn___errorMessage'
  | 'subrecipes___recipes___scheduledIn___rawPayload'
  | 'subrecipes___recipes___scheduledIn___status'
  | 'subrecipes___recipes___scheduledIn___id'
  | 'subrecipes___recipes___scheduledIn___children'
  | 'subrecipes___recipes___id'
  | 'subrecipes___recipes___parent___id'
  | 'subrecipes___recipes___parent___children'
  | 'subrecipes___recipes___children'
  | 'subrecipes___recipes___children___id'
  | 'subrecipes___recipes___children___children'
  | 'subrecipes___recipes___internal___content'
  | 'subrecipes___recipes___internal___contentDigest'
  | 'subrecipes___recipes___internal___description'
  | 'subrecipes___recipes___internal___fieldOwners'
  | 'subrecipes___recipes___internal___ignoreType'
  | 'subrecipes___recipes___internal___mediaType'
  | 'subrecipes___recipes___internal___owner'
  | 'subrecipes___recipes___internal___type'
  | 'subrecipes___cuisines'
  | 'subrecipes___tags'
  | 'subrecipes___difficulty'
  | 'subrecipes___scheduledIn'
  | 'subrecipes___scheduledIn___remoteTypeName'
  | 'subrecipes___scheduledIn___remoteId'
  | 'subrecipes___scheduledIn___stage'
  | 'subrecipes___scheduledIn___createdAt'
  | 'subrecipes___scheduledIn___updatedAt'
  | 'subrecipes___scheduledIn___publishedAt'
  | 'subrecipes___scheduledIn___description'
  | 'subrecipes___scheduledIn___errorMessage'
  | 'subrecipes___scheduledIn___rawPayload'
  | 'subrecipes___scheduledIn___createdBy___remoteTypeName'
  | 'subrecipes___scheduledIn___createdBy___remoteId'
  | 'subrecipes___scheduledIn___createdBy___stage'
  | 'subrecipes___scheduledIn___createdBy___createdAt'
  | 'subrecipes___scheduledIn___createdBy___updatedAt'
  | 'subrecipes___scheduledIn___createdBy___publishedAt'
  | 'subrecipes___scheduledIn___createdBy___name'
  | 'subrecipes___scheduledIn___createdBy___picture'
  | 'subrecipes___scheduledIn___createdBy___isActive'
  | 'subrecipes___scheduledIn___createdBy___kind'
  | 'subrecipes___scheduledIn___createdBy___id'
  | 'subrecipes___scheduledIn___createdBy___children'
  | 'subrecipes___scheduledIn___updatedBy___remoteTypeName'
  | 'subrecipes___scheduledIn___updatedBy___remoteId'
  | 'subrecipes___scheduledIn___updatedBy___stage'
  | 'subrecipes___scheduledIn___updatedBy___createdAt'
  | 'subrecipes___scheduledIn___updatedBy___updatedAt'
  | 'subrecipes___scheduledIn___updatedBy___publishedAt'
  | 'subrecipes___scheduledIn___updatedBy___name'
  | 'subrecipes___scheduledIn___updatedBy___picture'
  | 'subrecipes___scheduledIn___updatedBy___isActive'
  | 'subrecipes___scheduledIn___updatedBy___kind'
  | 'subrecipes___scheduledIn___updatedBy___id'
  | 'subrecipes___scheduledIn___updatedBy___children'
  | 'subrecipes___scheduledIn___publishedBy___remoteTypeName'
  | 'subrecipes___scheduledIn___publishedBy___remoteId'
  | 'subrecipes___scheduledIn___publishedBy___stage'
  | 'subrecipes___scheduledIn___publishedBy___createdAt'
  | 'subrecipes___scheduledIn___publishedBy___updatedAt'
  | 'subrecipes___scheduledIn___publishedBy___publishedAt'
  | 'subrecipes___scheduledIn___publishedBy___name'
  | 'subrecipes___scheduledIn___publishedBy___picture'
  | 'subrecipes___scheduledIn___publishedBy___isActive'
  | 'subrecipes___scheduledIn___publishedBy___kind'
  | 'subrecipes___scheduledIn___publishedBy___id'
  | 'subrecipes___scheduledIn___publishedBy___children'
  | 'subrecipes___scheduledIn___release___remoteTypeName'
  | 'subrecipes___scheduledIn___release___remoteId'
  | 'subrecipes___scheduledIn___release___stage'
  | 'subrecipes___scheduledIn___release___createdAt'
  | 'subrecipes___scheduledIn___release___updatedAt'
  | 'subrecipes___scheduledIn___release___publishedAt'
  | 'subrecipes___scheduledIn___release___title'
  | 'subrecipes___scheduledIn___release___description'
  | 'subrecipes___scheduledIn___release___errorMessage'
  | 'subrecipes___scheduledIn___release___isActive'
  | 'subrecipes___scheduledIn___release___isImplicit'
  | 'subrecipes___scheduledIn___release___releaseAt'
  | 'subrecipes___scheduledIn___release___operations'
  | 'subrecipes___scheduledIn___release___status'
  | 'subrecipes___scheduledIn___release___id'
  | 'subrecipes___scheduledIn___release___children'
  | 'subrecipes___scheduledIn___status'
  | 'subrecipes___scheduledIn___id'
  | 'subrecipes___scheduledIn___parent___id'
  | 'subrecipes___scheduledIn___parent___children'
  | 'subrecipes___scheduledIn___children'
  | 'subrecipes___scheduledIn___children___id'
  | 'subrecipes___scheduledIn___children___children'
  | 'subrecipes___scheduledIn___internal___content'
  | 'subrecipes___scheduledIn___internal___contentDigest'
  | 'subrecipes___scheduledIn___internal___description'
  | 'subrecipes___scheduledIn___internal___fieldOwners'
  | 'subrecipes___scheduledIn___internal___ignoreType'
  | 'subrecipes___scheduledIn___internal___mediaType'
  | 'subrecipes___scheduledIn___internal___owner'
  | 'subrecipes___scheduledIn___internal___type'
  | 'subrecipes___id'
  | 'subrecipes___parent___id'
  | 'subrecipes___parent___parent___id'
  | 'subrecipes___parent___parent___children'
  | 'subrecipes___parent___children'
  | 'subrecipes___parent___children___id'
  | 'subrecipes___parent___children___children'
  | 'subrecipes___parent___internal___content'
  | 'subrecipes___parent___internal___contentDigest'
  | 'subrecipes___parent___internal___description'
  | 'subrecipes___parent___internal___fieldOwners'
  | 'subrecipes___parent___internal___ignoreType'
  | 'subrecipes___parent___internal___mediaType'
  | 'subrecipes___parent___internal___owner'
  | 'subrecipes___parent___internal___type'
  | 'subrecipes___children'
  | 'subrecipes___children___id'
  | 'subrecipes___children___parent___id'
  | 'subrecipes___children___parent___children'
  | 'subrecipes___children___children'
  | 'subrecipes___children___children___id'
  | 'subrecipes___children___children___children'
  | 'subrecipes___children___internal___content'
  | 'subrecipes___children___internal___contentDigest'
  | 'subrecipes___children___internal___description'
  | 'subrecipes___children___internal___fieldOwners'
  | 'subrecipes___children___internal___ignoreType'
  | 'subrecipes___children___internal___mediaType'
  | 'subrecipes___children___internal___owner'
  | 'subrecipes___children___internal___type'
  | 'subrecipes___internal___content'
  | 'subrecipes___internal___contentDigest'
  | 'subrecipes___internal___description'
  | 'subrecipes___internal___fieldOwners'
  | 'subrecipes___internal___ignoreType'
  | 'subrecipes___internal___mediaType'
  | 'subrecipes___internal___owner'
  | 'subrecipes___internal___type'
  | 'recipes___remoteTypeName'
  | 'recipes___remoteId'
  | 'recipes___stage'
  | 'recipes___createdAt'
  | 'recipes___updatedAt'
  | 'recipes___publishedAt'
  | 'recipes___title'
  | 'recipes___slug'
  | 'recipes___description'
  | 'recipes___tools'
  | 'recipes___source'
  | 'recipes___yields'
  | 'recipes___time'
  | 'recipes___overnight'
  | 'recipes___margaritasFavorite'
  | 'recipes___artemsFavorite'
  | 'recipes___ingredients'
  | 'recipes___steps'
  | 'recipes___notes'
  | 'recipes___leftovers'
  | 'recipes___privateNotes'
  | 'recipes___createdBy___remoteTypeName'
  | 'recipes___createdBy___remoteId'
  | 'recipes___createdBy___stage'
  | 'recipes___createdBy___createdAt'
  | 'recipes___createdBy___updatedAt'
  | 'recipes___createdBy___publishedAt'
  | 'recipes___createdBy___name'
  | 'recipes___createdBy___picture'
  | 'recipes___createdBy___isActive'
  | 'recipes___createdBy___kind'
  | 'recipes___createdBy___id'
  | 'recipes___createdBy___parent___id'
  | 'recipes___createdBy___parent___children'
  | 'recipes___createdBy___children'
  | 'recipes___createdBy___children___id'
  | 'recipes___createdBy___children___children'
  | 'recipes___createdBy___internal___content'
  | 'recipes___createdBy___internal___contentDigest'
  | 'recipes___createdBy___internal___description'
  | 'recipes___createdBy___internal___fieldOwners'
  | 'recipes___createdBy___internal___ignoreType'
  | 'recipes___createdBy___internal___mediaType'
  | 'recipes___createdBy___internal___owner'
  | 'recipes___createdBy___internal___type'
  | 'recipes___updatedBy___remoteTypeName'
  | 'recipes___updatedBy___remoteId'
  | 'recipes___updatedBy___stage'
  | 'recipes___updatedBy___createdAt'
  | 'recipes___updatedBy___updatedAt'
  | 'recipes___updatedBy___publishedAt'
  | 'recipes___updatedBy___name'
  | 'recipes___updatedBy___picture'
  | 'recipes___updatedBy___isActive'
  | 'recipes___updatedBy___kind'
  | 'recipes___updatedBy___id'
  | 'recipes___updatedBy___parent___id'
  | 'recipes___updatedBy___parent___children'
  | 'recipes___updatedBy___children'
  | 'recipes___updatedBy___children___id'
  | 'recipes___updatedBy___children___children'
  | 'recipes___updatedBy___internal___content'
  | 'recipes___updatedBy___internal___contentDigest'
  | 'recipes___updatedBy___internal___description'
  | 'recipes___updatedBy___internal___fieldOwners'
  | 'recipes___updatedBy___internal___ignoreType'
  | 'recipes___updatedBy___internal___mediaType'
  | 'recipes___updatedBy___internal___owner'
  | 'recipes___updatedBy___internal___type'
  | 'recipes___publishedBy___remoteTypeName'
  | 'recipes___publishedBy___remoteId'
  | 'recipes___publishedBy___stage'
  | 'recipes___publishedBy___createdAt'
  | 'recipes___publishedBy___updatedAt'
  | 'recipes___publishedBy___publishedAt'
  | 'recipes___publishedBy___name'
  | 'recipes___publishedBy___picture'
  | 'recipes___publishedBy___isActive'
  | 'recipes___publishedBy___kind'
  | 'recipes___publishedBy___id'
  | 'recipes___publishedBy___parent___id'
  | 'recipes___publishedBy___parent___children'
  | 'recipes___publishedBy___children'
  | 'recipes___publishedBy___children___id'
  | 'recipes___publishedBy___children___children'
  | 'recipes___publishedBy___internal___content'
  | 'recipes___publishedBy___internal___contentDigest'
  | 'recipes___publishedBy___internal___description'
  | 'recipes___publishedBy___internal___fieldOwners'
  | 'recipes___publishedBy___internal___ignoreType'
  | 'recipes___publishedBy___internal___mediaType'
  | 'recipes___publishedBy___internal___owner'
  | 'recipes___publishedBy___internal___type'
  | 'recipes___images'
  | 'recipes___images___remoteTypeName'
  | 'recipes___images___remoteId'
  | 'recipes___images___locale'
  | 'recipes___images___stage'
  | 'recipes___images___createdAt'
  | 'recipes___images___updatedAt'
  | 'recipes___images___publishedAt'
  | 'recipes___images___handle'
  | 'recipes___images___fileName'
  | 'recipes___images___height'
  | 'recipes___images___width'
  | 'recipes___images___size'
  | 'recipes___images___mimeType'
  | 'recipes___images___createdBy___remoteTypeName'
  | 'recipes___images___createdBy___remoteId'
  | 'recipes___images___createdBy___stage'
  | 'recipes___images___createdBy___createdAt'
  | 'recipes___images___createdBy___updatedAt'
  | 'recipes___images___createdBy___publishedAt'
  | 'recipes___images___createdBy___name'
  | 'recipes___images___createdBy___picture'
  | 'recipes___images___createdBy___isActive'
  | 'recipes___images___createdBy___kind'
  | 'recipes___images___createdBy___id'
  | 'recipes___images___createdBy___children'
  | 'recipes___images___updatedBy___remoteTypeName'
  | 'recipes___images___updatedBy___remoteId'
  | 'recipes___images___updatedBy___stage'
  | 'recipes___images___updatedBy___createdAt'
  | 'recipes___images___updatedBy___updatedAt'
  | 'recipes___images___updatedBy___publishedAt'
  | 'recipes___images___updatedBy___name'
  | 'recipes___images___updatedBy___picture'
  | 'recipes___images___updatedBy___isActive'
  | 'recipes___images___updatedBy___kind'
  | 'recipes___images___updatedBy___id'
  | 'recipes___images___updatedBy___children'
  | 'recipes___images___publishedBy___remoteTypeName'
  | 'recipes___images___publishedBy___remoteId'
  | 'recipes___images___publishedBy___stage'
  | 'recipes___images___publishedBy___createdAt'
  | 'recipes___images___publishedBy___updatedAt'
  | 'recipes___images___publishedBy___publishedAt'
  | 'recipes___images___publishedBy___name'
  | 'recipes___images___publishedBy___picture'
  | 'recipes___images___publishedBy___isActive'
  | 'recipes___images___publishedBy___kind'
  | 'recipes___images___publishedBy___id'
  | 'recipes___images___publishedBy___children'
  | 'recipes___images___imagesRecipe'
  | 'recipes___images___imagesRecipe___remoteTypeName'
  | 'recipes___images___imagesRecipe___remoteId'
  | 'recipes___images___imagesRecipe___stage'
  | 'recipes___images___imagesRecipe___createdAt'
  | 'recipes___images___imagesRecipe___updatedAt'
  | 'recipes___images___imagesRecipe___publishedAt'
  | 'recipes___images___imagesRecipe___title'
  | 'recipes___images___imagesRecipe___slug'
  | 'recipes___images___imagesRecipe___description'
  | 'recipes___images___imagesRecipe___tools'
  | 'recipes___images___imagesRecipe___source'
  | 'recipes___images___imagesRecipe___yields'
  | 'recipes___images___imagesRecipe___time'
  | 'recipes___images___imagesRecipe___overnight'
  | 'recipes___images___imagesRecipe___margaritasFavorite'
  | 'recipes___images___imagesRecipe___artemsFavorite'
  | 'recipes___images___imagesRecipe___ingredients'
  | 'recipes___images___imagesRecipe___steps'
  | 'recipes___images___imagesRecipe___notes'
  | 'recipes___images___imagesRecipe___leftovers'
  | 'recipes___images___imagesRecipe___privateNotes'
  | 'recipes___images___imagesRecipe___images'
  | 'recipes___images___imagesRecipe___subrecipes'
  | 'recipes___images___imagesRecipe___cuisines'
  | 'recipes___images___imagesRecipe___tags'
  | 'recipes___images___imagesRecipe___difficulty'
  | 'recipes___images___imagesRecipe___scheduledIn'
  | 'recipes___images___imagesRecipe___id'
  | 'recipes___images___imagesRecipe___children'
  | 'recipes___images___scheduledIn'
  | 'recipes___images___scheduledIn___remoteTypeName'
  | 'recipes___images___scheduledIn___remoteId'
  | 'recipes___images___scheduledIn___stage'
  | 'recipes___images___scheduledIn___createdAt'
  | 'recipes___images___scheduledIn___updatedAt'
  | 'recipes___images___scheduledIn___publishedAt'
  | 'recipes___images___scheduledIn___description'
  | 'recipes___images___scheduledIn___errorMessage'
  | 'recipes___images___scheduledIn___rawPayload'
  | 'recipes___images___scheduledIn___status'
  | 'recipes___images___scheduledIn___id'
  | 'recipes___images___scheduledIn___children'
  | 'recipes___images___url'
  | 'recipes___images___id'
  | 'recipes___images___parent___id'
  | 'recipes___images___parent___children'
  | 'recipes___images___children'
  | 'recipes___images___children___id'
  | 'recipes___images___children___children'
  | 'recipes___images___internal___content'
  | 'recipes___images___internal___contentDigest'
  | 'recipes___images___internal___description'
  | 'recipes___images___internal___fieldOwners'
  | 'recipes___images___internal___ignoreType'
  | 'recipes___images___internal___mediaType'
  | 'recipes___images___internal___owner'
  | 'recipes___images___internal___type'
  | 'recipes___subrecipes'
  | 'recipes___subrecipes___remoteTypeName'
  | 'recipes___subrecipes___remoteId'
  | 'recipes___subrecipes___stage'
  | 'recipes___subrecipes___createdAt'
  | 'recipes___subrecipes___updatedAt'
  | 'recipes___subrecipes___publishedAt'
  | 'recipes___subrecipes___title'
  | 'recipes___subrecipes___slug'
  | 'recipes___subrecipes___description'
  | 'recipes___subrecipes___tools'
  | 'recipes___subrecipes___source'
  | 'recipes___subrecipes___yields'
  | 'recipes___subrecipes___time'
  | 'recipes___subrecipes___overnight'
  | 'recipes___subrecipes___margaritasFavorite'
  | 'recipes___subrecipes___artemsFavorite'
  | 'recipes___subrecipes___ingredients'
  | 'recipes___subrecipes___steps'
  | 'recipes___subrecipes___notes'
  | 'recipes___subrecipes___leftovers'
  | 'recipes___subrecipes___privateNotes'
  | 'recipes___subrecipes___createdBy___remoteTypeName'
  | 'recipes___subrecipes___createdBy___remoteId'
  | 'recipes___subrecipes___createdBy___stage'
  | 'recipes___subrecipes___createdBy___createdAt'
  | 'recipes___subrecipes___createdBy___updatedAt'
  | 'recipes___subrecipes___createdBy___publishedAt'
  | 'recipes___subrecipes___createdBy___name'
  | 'recipes___subrecipes___createdBy___picture'
  | 'recipes___subrecipes___createdBy___isActive'
  | 'recipes___subrecipes___createdBy___kind'
  | 'recipes___subrecipes___createdBy___id'
  | 'recipes___subrecipes___createdBy___children'
  | 'recipes___subrecipes___updatedBy___remoteTypeName'
  | 'recipes___subrecipes___updatedBy___remoteId'
  | 'recipes___subrecipes___updatedBy___stage'
  | 'recipes___subrecipes___updatedBy___createdAt'
  | 'recipes___subrecipes___updatedBy___updatedAt'
  | 'recipes___subrecipes___updatedBy___publishedAt'
  | 'recipes___subrecipes___updatedBy___name'
  | 'recipes___subrecipes___updatedBy___picture'
  | 'recipes___subrecipes___updatedBy___isActive'
  | 'recipes___subrecipes___updatedBy___kind'
  | 'recipes___subrecipes___updatedBy___id'
  | 'recipes___subrecipes___updatedBy___children'
  | 'recipes___subrecipes___publishedBy___remoteTypeName'
  | 'recipes___subrecipes___publishedBy___remoteId'
  | 'recipes___subrecipes___publishedBy___stage'
  | 'recipes___subrecipes___publishedBy___createdAt'
  | 'recipes___subrecipes___publishedBy___updatedAt'
  | 'recipes___subrecipes___publishedBy___publishedAt'
  | 'recipes___subrecipes___publishedBy___name'
  | 'recipes___subrecipes___publishedBy___picture'
  | 'recipes___subrecipes___publishedBy___isActive'
  | 'recipes___subrecipes___publishedBy___kind'
  | 'recipes___subrecipes___publishedBy___id'
  | 'recipes___subrecipes___publishedBy___children'
  | 'recipes___subrecipes___images'
  | 'recipes___subrecipes___images___remoteTypeName'
  | 'recipes___subrecipes___images___remoteId'
  | 'recipes___subrecipes___images___locale'
  | 'recipes___subrecipes___images___stage'
  | 'recipes___subrecipes___images___createdAt'
  | 'recipes___subrecipes___images___updatedAt'
  | 'recipes___subrecipes___images___publishedAt'
  | 'recipes___subrecipes___images___handle'
  | 'recipes___subrecipes___images___fileName'
  | 'recipes___subrecipes___images___height'
  | 'recipes___subrecipes___images___width'
  | 'recipes___subrecipes___images___size'
  | 'recipes___subrecipes___images___mimeType'
  | 'recipes___subrecipes___images___imagesRecipe'
  | 'recipes___subrecipes___images___scheduledIn'
  | 'recipes___subrecipes___images___url'
  | 'recipes___subrecipes___images___id'
  | 'recipes___subrecipes___images___children'
  | 'recipes___subrecipes___subrecipes'
  | 'recipes___subrecipes___subrecipes___remoteTypeName'
  | 'recipes___subrecipes___subrecipes___remoteId'
  | 'recipes___subrecipes___subrecipes___stage'
  | 'recipes___subrecipes___subrecipes___createdAt'
  | 'recipes___subrecipes___subrecipes___updatedAt'
  | 'recipes___subrecipes___subrecipes___publishedAt'
  | 'recipes___subrecipes___subrecipes___title'
  | 'recipes___subrecipes___subrecipes___slug'
  | 'recipes___subrecipes___subrecipes___description'
  | 'recipes___subrecipes___subrecipes___tools'
  | 'recipes___subrecipes___subrecipes___source'
  | 'recipes___subrecipes___subrecipes___yields'
  | 'recipes___subrecipes___subrecipes___time'
  | 'recipes___subrecipes___subrecipes___overnight'
  | 'recipes___subrecipes___subrecipes___margaritasFavorite'
  | 'recipes___subrecipes___subrecipes___artemsFavorite'
  | 'recipes___subrecipes___subrecipes___ingredients'
  | 'recipes___subrecipes___subrecipes___steps'
  | 'recipes___subrecipes___subrecipes___notes'
  | 'recipes___subrecipes___subrecipes___leftovers'
  | 'recipes___subrecipes___subrecipes___privateNotes'
  | 'recipes___subrecipes___subrecipes___images'
  | 'recipes___subrecipes___subrecipes___subrecipes'
  | 'recipes___subrecipes___subrecipes___cuisines'
  | 'recipes___subrecipes___subrecipes___tags'
  | 'recipes___subrecipes___subrecipes___difficulty'
  | 'recipes___subrecipes___subrecipes___scheduledIn'
  | 'recipes___subrecipes___subrecipes___id'
  | 'recipes___subrecipes___subrecipes___children'
  | 'recipes___subrecipes___recipes___remoteTypeName'
  | 'recipes___subrecipes___recipes___remoteId'
  | 'recipes___subrecipes___recipes___stage'
  | 'recipes___subrecipes___recipes___createdAt'
  | 'recipes___subrecipes___recipes___updatedAt'
  | 'recipes___subrecipes___recipes___publishedAt'
  | 'recipes___subrecipes___recipes___title'
  | 'recipes___subrecipes___recipes___slug'
  | 'recipes___subrecipes___recipes___description'
  | 'recipes___subrecipes___recipes___tools'
  | 'recipes___subrecipes___recipes___source'
  | 'recipes___subrecipes___recipes___yields'
  | 'recipes___subrecipes___recipes___time'
  | 'recipes___subrecipes___recipes___overnight'
  | 'recipes___subrecipes___recipes___margaritasFavorite'
  | 'recipes___subrecipes___recipes___artemsFavorite'
  | 'recipes___subrecipes___recipes___ingredients'
  | 'recipes___subrecipes___recipes___steps'
  | 'recipes___subrecipes___recipes___notes'
  | 'recipes___subrecipes___recipes___leftovers'
  | 'recipes___subrecipes___recipes___privateNotes'
  | 'recipes___subrecipes___recipes___images'
  | 'recipes___subrecipes___recipes___subrecipes'
  | 'recipes___subrecipes___recipes___cuisines'
  | 'recipes___subrecipes___recipes___tags'
  | 'recipes___subrecipes___recipes___difficulty'
  | 'recipes___subrecipes___recipes___scheduledIn'
  | 'recipes___subrecipes___recipes___id'
  | 'recipes___subrecipes___recipes___children'
  | 'recipes___subrecipes___cuisines'
  | 'recipes___subrecipes___tags'
  | 'recipes___subrecipes___difficulty'
  | 'recipes___subrecipes___scheduledIn'
  | 'recipes___subrecipes___scheduledIn___remoteTypeName'
  | 'recipes___subrecipes___scheduledIn___remoteId'
  | 'recipes___subrecipes___scheduledIn___stage'
  | 'recipes___subrecipes___scheduledIn___createdAt'
  | 'recipes___subrecipes___scheduledIn___updatedAt'
  | 'recipes___subrecipes___scheduledIn___publishedAt'
  | 'recipes___subrecipes___scheduledIn___description'
  | 'recipes___subrecipes___scheduledIn___errorMessage'
  | 'recipes___subrecipes___scheduledIn___rawPayload'
  | 'recipes___subrecipes___scheduledIn___status'
  | 'recipes___subrecipes___scheduledIn___id'
  | 'recipes___subrecipes___scheduledIn___children'
  | 'recipes___subrecipes___id'
  | 'recipes___subrecipes___parent___id'
  | 'recipes___subrecipes___parent___children'
  | 'recipes___subrecipes___children'
  | 'recipes___subrecipes___children___id'
  | 'recipes___subrecipes___children___children'
  | 'recipes___subrecipes___internal___content'
  | 'recipes___subrecipes___internal___contentDigest'
  | 'recipes___subrecipes___internal___description'
  | 'recipes___subrecipes___internal___fieldOwners'
  | 'recipes___subrecipes___internal___ignoreType'
  | 'recipes___subrecipes___internal___mediaType'
  | 'recipes___subrecipes___internal___owner'
  | 'recipes___subrecipes___internal___type'
  | 'recipes___recipes___remoteTypeName'
  | 'recipes___recipes___remoteId'
  | 'recipes___recipes___stage'
  | 'recipes___recipes___createdAt'
  | 'recipes___recipes___updatedAt'
  | 'recipes___recipes___publishedAt'
  | 'recipes___recipes___title'
  | 'recipes___recipes___slug'
  | 'recipes___recipes___description'
  | 'recipes___recipes___tools'
  | 'recipes___recipes___source'
  | 'recipes___recipes___yields'
  | 'recipes___recipes___time'
  | 'recipes___recipes___overnight'
  | 'recipes___recipes___margaritasFavorite'
  | 'recipes___recipes___artemsFavorite'
  | 'recipes___recipes___ingredients'
  | 'recipes___recipes___steps'
  | 'recipes___recipes___notes'
  | 'recipes___recipes___leftovers'
  | 'recipes___recipes___privateNotes'
  | 'recipes___recipes___createdBy___remoteTypeName'
  | 'recipes___recipes___createdBy___remoteId'
  | 'recipes___recipes___createdBy___stage'
  | 'recipes___recipes___createdBy___createdAt'
  | 'recipes___recipes___createdBy___updatedAt'
  | 'recipes___recipes___createdBy___publishedAt'
  | 'recipes___recipes___createdBy___name'
  | 'recipes___recipes___createdBy___picture'
  | 'recipes___recipes___createdBy___isActive'
  | 'recipes___recipes___createdBy___kind'
  | 'recipes___recipes___createdBy___id'
  | 'recipes___recipes___createdBy___children'
  | 'recipes___recipes___updatedBy___remoteTypeName'
  | 'recipes___recipes___updatedBy___remoteId'
  | 'recipes___recipes___updatedBy___stage'
  | 'recipes___recipes___updatedBy___createdAt'
  | 'recipes___recipes___updatedBy___updatedAt'
  | 'recipes___recipes___updatedBy___publishedAt'
  | 'recipes___recipes___updatedBy___name'
  | 'recipes___recipes___updatedBy___picture'
  | 'recipes___recipes___updatedBy___isActive'
  | 'recipes___recipes___updatedBy___kind'
  | 'recipes___recipes___updatedBy___id'
  | 'recipes___recipes___updatedBy___children'
  | 'recipes___recipes___publishedBy___remoteTypeName'
  | 'recipes___recipes___publishedBy___remoteId'
  | 'recipes___recipes___publishedBy___stage'
  | 'recipes___recipes___publishedBy___createdAt'
  | 'recipes___recipes___publishedBy___updatedAt'
  | 'recipes___recipes___publishedBy___publishedAt'
  | 'recipes___recipes___publishedBy___name'
  | 'recipes___recipes___publishedBy___picture'
  | 'recipes___recipes___publishedBy___isActive'
  | 'recipes___recipes___publishedBy___kind'
  | 'recipes___recipes___publishedBy___id'
  | 'recipes___recipes___publishedBy___children'
  | 'recipes___recipes___images'
  | 'recipes___recipes___images___remoteTypeName'
  | 'recipes___recipes___images___remoteId'
  | 'recipes___recipes___images___locale'
  | 'recipes___recipes___images___stage'
  | 'recipes___recipes___images___createdAt'
  | 'recipes___recipes___images___updatedAt'
  | 'recipes___recipes___images___publishedAt'
  | 'recipes___recipes___images___handle'
  | 'recipes___recipes___images___fileName'
  | 'recipes___recipes___images___height'
  | 'recipes___recipes___images___width'
  | 'recipes___recipes___images___size'
  | 'recipes___recipes___images___mimeType'
  | 'recipes___recipes___images___imagesRecipe'
  | 'recipes___recipes___images___scheduledIn'
  | 'recipes___recipes___images___url'
  | 'recipes___recipes___images___id'
  | 'recipes___recipes___images___children'
  | 'recipes___recipes___subrecipes'
  | 'recipes___recipes___subrecipes___remoteTypeName'
  | 'recipes___recipes___subrecipes___remoteId'
  | 'recipes___recipes___subrecipes___stage'
  | 'recipes___recipes___subrecipes___createdAt'
  | 'recipes___recipes___subrecipes___updatedAt'
  | 'recipes___recipes___subrecipes___publishedAt'
  | 'recipes___recipes___subrecipes___title'
  | 'recipes___recipes___subrecipes___slug'
  | 'recipes___recipes___subrecipes___description'
  | 'recipes___recipes___subrecipes___tools'
  | 'recipes___recipes___subrecipes___source'
  | 'recipes___recipes___subrecipes___yields'
  | 'recipes___recipes___subrecipes___time'
  | 'recipes___recipes___subrecipes___overnight'
  | 'recipes___recipes___subrecipes___margaritasFavorite'
  | 'recipes___recipes___subrecipes___artemsFavorite'
  | 'recipes___recipes___subrecipes___ingredients'
  | 'recipes___recipes___subrecipes___steps'
  | 'recipes___recipes___subrecipes___notes'
  | 'recipes___recipes___subrecipes___leftovers'
  | 'recipes___recipes___subrecipes___privateNotes'
  | 'recipes___recipes___subrecipes___images'
  | 'recipes___recipes___subrecipes___subrecipes'
  | 'recipes___recipes___subrecipes___cuisines'
  | 'recipes___recipes___subrecipes___tags'
  | 'recipes___recipes___subrecipes___difficulty'
  | 'recipes___recipes___subrecipes___scheduledIn'
  | 'recipes___recipes___subrecipes___id'
  | 'recipes___recipes___subrecipes___children'
  | 'recipes___recipes___recipes___remoteTypeName'
  | 'recipes___recipes___recipes___remoteId'
  | 'recipes___recipes___recipes___stage'
  | 'recipes___recipes___recipes___createdAt'
  | 'recipes___recipes___recipes___updatedAt'
  | 'recipes___recipes___recipes___publishedAt'
  | 'recipes___recipes___recipes___title'
  | 'recipes___recipes___recipes___slug'
  | 'recipes___recipes___recipes___description'
  | 'recipes___recipes___recipes___tools'
  | 'recipes___recipes___recipes___source'
  | 'recipes___recipes___recipes___yields'
  | 'recipes___recipes___recipes___time'
  | 'recipes___recipes___recipes___overnight'
  | 'recipes___recipes___recipes___margaritasFavorite'
  | 'recipes___recipes___recipes___artemsFavorite'
  | 'recipes___recipes___recipes___ingredients'
  | 'recipes___recipes___recipes___steps'
  | 'recipes___recipes___recipes___notes'
  | 'recipes___recipes___recipes___leftovers'
  | 'recipes___recipes___recipes___privateNotes'
  | 'recipes___recipes___recipes___images'
  | 'recipes___recipes___recipes___subrecipes'
  | 'recipes___recipes___recipes___cuisines'
  | 'recipes___recipes___recipes___tags'
  | 'recipes___recipes___recipes___difficulty'
  | 'recipes___recipes___recipes___scheduledIn'
  | 'recipes___recipes___recipes___id'
  | 'recipes___recipes___recipes___children'
  | 'recipes___recipes___cuisines'
  | 'recipes___recipes___tags'
  | 'recipes___recipes___difficulty'
  | 'recipes___recipes___scheduledIn'
  | 'recipes___recipes___scheduledIn___remoteTypeName'
  | 'recipes___recipes___scheduledIn___remoteId'
  | 'recipes___recipes___scheduledIn___stage'
  | 'recipes___recipes___scheduledIn___createdAt'
  | 'recipes___recipes___scheduledIn___updatedAt'
  | 'recipes___recipes___scheduledIn___publishedAt'
  | 'recipes___recipes___scheduledIn___description'
  | 'recipes___recipes___scheduledIn___errorMessage'
  | 'recipes___recipes___scheduledIn___rawPayload'
  | 'recipes___recipes___scheduledIn___status'
  | 'recipes___recipes___scheduledIn___id'
  | 'recipes___recipes___scheduledIn___children'
  | 'recipes___recipes___id'
  | 'recipes___recipes___parent___id'
  | 'recipes___recipes___parent___children'
  | 'recipes___recipes___children'
  | 'recipes___recipes___children___id'
  | 'recipes___recipes___children___children'
  | 'recipes___recipes___internal___content'
  | 'recipes___recipes___internal___contentDigest'
  | 'recipes___recipes___internal___description'
  | 'recipes___recipes___internal___fieldOwners'
  | 'recipes___recipes___internal___ignoreType'
  | 'recipes___recipes___internal___mediaType'
  | 'recipes___recipes___internal___owner'
  | 'recipes___recipes___internal___type'
  | 'recipes___cuisines'
  | 'recipes___tags'
  | 'recipes___difficulty'
  | 'recipes___scheduledIn'
  | 'recipes___scheduledIn___remoteTypeName'
  | 'recipes___scheduledIn___remoteId'
  | 'recipes___scheduledIn___stage'
  | 'recipes___scheduledIn___createdAt'
  | 'recipes___scheduledIn___updatedAt'
  | 'recipes___scheduledIn___publishedAt'
  | 'recipes___scheduledIn___description'
  | 'recipes___scheduledIn___errorMessage'
  | 'recipes___scheduledIn___rawPayload'
  | 'recipes___scheduledIn___createdBy___remoteTypeName'
  | 'recipes___scheduledIn___createdBy___remoteId'
  | 'recipes___scheduledIn___createdBy___stage'
  | 'recipes___scheduledIn___createdBy___createdAt'
  | 'recipes___scheduledIn___createdBy___updatedAt'
  | 'recipes___scheduledIn___createdBy___publishedAt'
  | 'recipes___scheduledIn___createdBy___name'
  | 'recipes___scheduledIn___createdBy___picture'
  | 'recipes___scheduledIn___createdBy___isActive'
  | 'recipes___scheduledIn___createdBy___kind'
  | 'recipes___scheduledIn___createdBy___id'
  | 'recipes___scheduledIn___createdBy___children'
  | 'recipes___scheduledIn___updatedBy___remoteTypeName'
  | 'recipes___scheduledIn___updatedBy___remoteId'
  | 'recipes___scheduledIn___updatedBy___stage'
  | 'recipes___scheduledIn___updatedBy___createdAt'
  | 'recipes___scheduledIn___updatedBy___updatedAt'
  | 'recipes___scheduledIn___updatedBy___publishedAt'
  | 'recipes___scheduledIn___updatedBy___name'
  | 'recipes___scheduledIn___updatedBy___picture'
  | 'recipes___scheduledIn___updatedBy___isActive'
  | 'recipes___scheduledIn___updatedBy___kind'
  | 'recipes___scheduledIn___updatedBy___id'
  | 'recipes___scheduledIn___updatedBy___children'
  | 'recipes___scheduledIn___publishedBy___remoteTypeName'
  | 'recipes___scheduledIn___publishedBy___remoteId'
  | 'recipes___scheduledIn___publishedBy___stage'
  | 'recipes___scheduledIn___publishedBy___createdAt'
  | 'recipes___scheduledIn___publishedBy___updatedAt'
  | 'recipes___scheduledIn___publishedBy___publishedAt'
  | 'recipes___scheduledIn___publishedBy___name'
  | 'recipes___scheduledIn___publishedBy___picture'
  | 'recipes___scheduledIn___publishedBy___isActive'
  | 'recipes___scheduledIn___publishedBy___kind'
  | 'recipes___scheduledIn___publishedBy___id'
  | 'recipes___scheduledIn___publishedBy___children'
  | 'recipes___scheduledIn___release___remoteTypeName'
  | 'recipes___scheduledIn___release___remoteId'
  | 'recipes___scheduledIn___release___stage'
  | 'recipes___scheduledIn___release___createdAt'
  | 'recipes___scheduledIn___release___updatedAt'
  | 'recipes___scheduledIn___release___publishedAt'
  | 'recipes___scheduledIn___release___title'
  | 'recipes___scheduledIn___release___description'
  | 'recipes___scheduledIn___release___errorMessage'
  | 'recipes___scheduledIn___release___isActive'
  | 'recipes___scheduledIn___release___isImplicit'
  | 'recipes___scheduledIn___release___releaseAt'
  | 'recipes___scheduledIn___release___operations'
  | 'recipes___scheduledIn___release___status'
  | 'recipes___scheduledIn___release___id'
  | 'recipes___scheduledIn___release___children'
  | 'recipes___scheduledIn___status'
  | 'recipes___scheduledIn___id'
  | 'recipes___scheduledIn___parent___id'
  | 'recipes___scheduledIn___parent___children'
  | 'recipes___scheduledIn___children'
  | 'recipes___scheduledIn___children___id'
  | 'recipes___scheduledIn___children___children'
  | 'recipes___scheduledIn___internal___content'
  | 'recipes___scheduledIn___internal___contentDigest'
  | 'recipes___scheduledIn___internal___description'
  | 'recipes___scheduledIn___internal___fieldOwners'
  | 'recipes___scheduledIn___internal___ignoreType'
  | 'recipes___scheduledIn___internal___mediaType'
  | 'recipes___scheduledIn___internal___owner'
  | 'recipes___scheduledIn___internal___type'
  | 'recipes___id'
  | 'recipes___parent___id'
  | 'recipes___parent___parent___id'
  | 'recipes___parent___parent___children'
  | 'recipes___parent___children'
  | 'recipes___parent___children___id'
  | 'recipes___parent___children___children'
  | 'recipes___parent___internal___content'
  | 'recipes___parent___internal___contentDigest'
  | 'recipes___parent___internal___description'
  | 'recipes___parent___internal___fieldOwners'
  | 'recipes___parent___internal___ignoreType'
  | 'recipes___parent___internal___mediaType'
  | 'recipes___parent___internal___owner'
  | 'recipes___parent___internal___type'
  | 'recipes___children'
  | 'recipes___children___id'
  | 'recipes___children___parent___id'
  | 'recipes___children___parent___children'
  | 'recipes___children___children'
  | 'recipes___children___children___id'
  | 'recipes___children___children___children'
  | 'recipes___children___internal___content'
  | 'recipes___children___internal___contentDigest'
  | 'recipes___children___internal___description'
  | 'recipes___children___internal___fieldOwners'
  | 'recipes___children___internal___ignoreType'
  | 'recipes___children___internal___mediaType'
  | 'recipes___children___internal___owner'
  | 'recipes___children___internal___type'
  | 'recipes___internal___content'
  | 'recipes___internal___contentDigest'
  | 'recipes___internal___description'
  | 'recipes___internal___fieldOwners'
  | 'recipes___internal___ignoreType'
  | 'recipes___internal___mediaType'
  | 'recipes___internal___owner'
  | 'recipes___internal___type'
  | 'cuisines'
  | 'tags'
  | 'difficulty'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___description'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_RecipeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_RecipeEdge>;
  nodes: Array<GraphCms_Recipe>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_RecipeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_RecipeGroupConnectionDistinctArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeGroupConnectionMaxArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeGroupConnectionMinArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeGroupConnectionSumArgs = {
  field: GraphCms_RecipeFieldsEnum;
};


export type GraphCms_RecipeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_RecipeFieldsEnum;
};

export type GraphCms_RecipeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_RecipeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledOperationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
};


export type GraphCms_ScheduledOperationConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationEdge = {
  next?: Maybe<GraphCms_ScheduledOperation>;
  node: GraphCms_ScheduledOperation;
  previous?: Maybe<GraphCms_ScheduledOperation>;
};

export type GraphCms_ScheduledOperationFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'description'
  | 'errorMessage'
  | 'rawPayload'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'release___remoteTypeName'
  | 'release___remoteId'
  | 'release___stage'
  | 'release___createdAt'
  | 'release___updatedAt'
  | 'release___publishedAt'
  | 'release___title'
  | 'release___description'
  | 'release___errorMessage'
  | 'release___isActive'
  | 'release___isImplicit'
  | 'release___releaseAt'
  | 'release___createdBy___remoteTypeName'
  | 'release___createdBy___remoteId'
  | 'release___createdBy___stage'
  | 'release___createdBy___createdAt'
  | 'release___createdBy___updatedAt'
  | 'release___createdBy___publishedAt'
  | 'release___createdBy___name'
  | 'release___createdBy___picture'
  | 'release___createdBy___isActive'
  | 'release___createdBy___kind'
  | 'release___createdBy___id'
  | 'release___createdBy___parent___id'
  | 'release___createdBy___parent___children'
  | 'release___createdBy___children'
  | 'release___createdBy___children___id'
  | 'release___createdBy___children___children'
  | 'release___createdBy___internal___content'
  | 'release___createdBy___internal___contentDigest'
  | 'release___createdBy___internal___description'
  | 'release___createdBy___internal___fieldOwners'
  | 'release___createdBy___internal___ignoreType'
  | 'release___createdBy___internal___mediaType'
  | 'release___createdBy___internal___owner'
  | 'release___createdBy___internal___type'
  | 'release___updatedBy___remoteTypeName'
  | 'release___updatedBy___remoteId'
  | 'release___updatedBy___stage'
  | 'release___updatedBy___createdAt'
  | 'release___updatedBy___updatedAt'
  | 'release___updatedBy___publishedAt'
  | 'release___updatedBy___name'
  | 'release___updatedBy___picture'
  | 'release___updatedBy___isActive'
  | 'release___updatedBy___kind'
  | 'release___updatedBy___id'
  | 'release___updatedBy___parent___id'
  | 'release___updatedBy___parent___children'
  | 'release___updatedBy___children'
  | 'release___updatedBy___children___id'
  | 'release___updatedBy___children___children'
  | 'release___updatedBy___internal___content'
  | 'release___updatedBy___internal___contentDigest'
  | 'release___updatedBy___internal___description'
  | 'release___updatedBy___internal___fieldOwners'
  | 'release___updatedBy___internal___ignoreType'
  | 'release___updatedBy___internal___mediaType'
  | 'release___updatedBy___internal___owner'
  | 'release___updatedBy___internal___type'
  | 'release___publishedBy___remoteTypeName'
  | 'release___publishedBy___remoteId'
  | 'release___publishedBy___stage'
  | 'release___publishedBy___createdAt'
  | 'release___publishedBy___updatedAt'
  | 'release___publishedBy___publishedAt'
  | 'release___publishedBy___name'
  | 'release___publishedBy___picture'
  | 'release___publishedBy___isActive'
  | 'release___publishedBy___kind'
  | 'release___publishedBy___id'
  | 'release___publishedBy___parent___id'
  | 'release___publishedBy___parent___children'
  | 'release___publishedBy___children'
  | 'release___publishedBy___children___id'
  | 'release___publishedBy___children___children'
  | 'release___publishedBy___internal___content'
  | 'release___publishedBy___internal___contentDigest'
  | 'release___publishedBy___internal___description'
  | 'release___publishedBy___internal___fieldOwners'
  | 'release___publishedBy___internal___ignoreType'
  | 'release___publishedBy___internal___mediaType'
  | 'release___publishedBy___internal___owner'
  | 'release___publishedBy___internal___type'
  | 'release___operations'
  | 'release___operations___remoteTypeName'
  | 'release___operations___remoteId'
  | 'release___operations___stage'
  | 'release___operations___createdAt'
  | 'release___operations___updatedAt'
  | 'release___operations___publishedAt'
  | 'release___operations___description'
  | 'release___operations___errorMessage'
  | 'release___operations___rawPayload'
  | 'release___operations___createdBy___remoteTypeName'
  | 'release___operations___createdBy___remoteId'
  | 'release___operations___createdBy___stage'
  | 'release___operations___createdBy___createdAt'
  | 'release___operations___createdBy___updatedAt'
  | 'release___operations___createdBy___publishedAt'
  | 'release___operations___createdBy___name'
  | 'release___operations___createdBy___picture'
  | 'release___operations___createdBy___isActive'
  | 'release___operations___createdBy___kind'
  | 'release___operations___createdBy___id'
  | 'release___operations___createdBy___children'
  | 'release___operations___updatedBy___remoteTypeName'
  | 'release___operations___updatedBy___remoteId'
  | 'release___operations___updatedBy___stage'
  | 'release___operations___updatedBy___createdAt'
  | 'release___operations___updatedBy___updatedAt'
  | 'release___operations___updatedBy___publishedAt'
  | 'release___operations___updatedBy___name'
  | 'release___operations___updatedBy___picture'
  | 'release___operations___updatedBy___isActive'
  | 'release___operations___updatedBy___kind'
  | 'release___operations___updatedBy___id'
  | 'release___operations___updatedBy___children'
  | 'release___operations___publishedBy___remoteTypeName'
  | 'release___operations___publishedBy___remoteId'
  | 'release___operations___publishedBy___stage'
  | 'release___operations___publishedBy___createdAt'
  | 'release___operations___publishedBy___updatedAt'
  | 'release___operations___publishedBy___publishedAt'
  | 'release___operations___publishedBy___name'
  | 'release___operations___publishedBy___picture'
  | 'release___operations___publishedBy___isActive'
  | 'release___operations___publishedBy___kind'
  | 'release___operations___publishedBy___id'
  | 'release___operations___publishedBy___children'
  | 'release___operations___release___remoteTypeName'
  | 'release___operations___release___remoteId'
  | 'release___operations___release___stage'
  | 'release___operations___release___createdAt'
  | 'release___operations___release___updatedAt'
  | 'release___operations___release___publishedAt'
  | 'release___operations___release___title'
  | 'release___operations___release___description'
  | 'release___operations___release___errorMessage'
  | 'release___operations___release___isActive'
  | 'release___operations___release___isImplicit'
  | 'release___operations___release___releaseAt'
  | 'release___operations___release___operations'
  | 'release___operations___release___status'
  | 'release___operations___release___id'
  | 'release___operations___release___children'
  | 'release___operations___status'
  | 'release___operations___id'
  | 'release___operations___parent___id'
  | 'release___operations___parent___children'
  | 'release___operations___children'
  | 'release___operations___children___id'
  | 'release___operations___children___children'
  | 'release___operations___internal___content'
  | 'release___operations___internal___contentDigest'
  | 'release___operations___internal___description'
  | 'release___operations___internal___fieldOwners'
  | 'release___operations___internal___ignoreType'
  | 'release___operations___internal___mediaType'
  | 'release___operations___internal___owner'
  | 'release___operations___internal___type'
  | 'release___status'
  | 'release___id'
  | 'release___parent___id'
  | 'release___parent___parent___id'
  | 'release___parent___parent___children'
  | 'release___parent___children'
  | 'release___parent___children___id'
  | 'release___parent___children___children'
  | 'release___parent___internal___content'
  | 'release___parent___internal___contentDigest'
  | 'release___parent___internal___description'
  | 'release___parent___internal___fieldOwners'
  | 'release___parent___internal___ignoreType'
  | 'release___parent___internal___mediaType'
  | 'release___parent___internal___owner'
  | 'release___parent___internal___type'
  | 'release___children'
  | 'release___children___id'
  | 'release___children___parent___id'
  | 'release___children___parent___children'
  | 'release___children___children'
  | 'release___children___children___id'
  | 'release___children___children___children'
  | 'release___children___internal___content'
  | 'release___children___internal___contentDigest'
  | 'release___children___internal___description'
  | 'release___children___internal___fieldOwners'
  | 'release___children___internal___ignoreType'
  | 'release___children___internal___mediaType'
  | 'release___children___internal___owner'
  | 'release___children___internal___type'
  | 'release___internal___content'
  | 'release___internal___contentDigest'
  | 'release___internal___description'
  | 'release___internal___fieldOwners'
  | 'release___internal___ignoreType'
  | 'release___internal___mediaType'
  | 'release___internal___owner'
  | 'release___internal___type'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_ScheduledOperationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_ScheduledOperationGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_IngredientConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_IngredientEdge>;
  nodes: Array<GraphCms_Ingredient>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_IngredientGroupConnection>;
};


export type GraphCms_IngredientConnectionDistinctArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientConnectionMaxArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientConnectionMinArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientConnectionSumArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_IngredientFieldsEnum;
};

export type GraphCms_IngredientEdge = {
  next?: Maybe<GraphCms_Ingredient>;
  node: GraphCms_Ingredient;
  previous?: Maybe<GraphCms_Ingredient>;
};

export type GraphCms_IngredientFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'slug'
  | 'description'
  | 'storage'
  | 'warnings'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___description'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_IngredientGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_IngredientEdge>;
  nodes: Array<GraphCms_Ingredient>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_IngredientGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_IngredientGroupConnectionDistinctArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientGroupConnectionMaxArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientGroupConnectionMinArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientGroupConnectionSumArgs = {
  field: GraphCms_IngredientFieldsEnum;
};


export type GraphCms_IngredientGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_IngredientFieldsEnum;
};

export type GraphCms_IngredientFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  storage?: InputMaybe<StringQueryOperatorInput>;
  warnings?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_IngredientSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_IngredientFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledReleaseConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
};


export type GraphCms_ScheduledReleaseConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseEdge = {
  next?: Maybe<GraphCms_ScheduledRelease>;
  node: GraphCms_ScheduledRelease;
  previous?: Maybe<GraphCms_ScheduledRelease>;
};

export type GraphCms_ScheduledReleaseFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'title'
  | 'description'
  | 'errorMessage'
  | 'isActive'
  | 'isImplicit'
  | 'releaseAt'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'operations'
  | 'operations___remoteTypeName'
  | 'operations___remoteId'
  | 'operations___stage'
  | 'operations___createdAt'
  | 'operations___updatedAt'
  | 'operations___publishedAt'
  | 'operations___description'
  | 'operations___errorMessage'
  | 'operations___rawPayload'
  | 'operations___createdBy___remoteTypeName'
  | 'operations___createdBy___remoteId'
  | 'operations___createdBy___stage'
  | 'operations___createdBy___createdAt'
  | 'operations___createdBy___updatedAt'
  | 'operations___createdBy___publishedAt'
  | 'operations___createdBy___name'
  | 'operations___createdBy___picture'
  | 'operations___createdBy___isActive'
  | 'operations___createdBy___kind'
  | 'operations___createdBy___id'
  | 'operations___createdBy___parent___id'
  | 'operations___createdBy___parent___children'
  | 'operations___createdBy___children'
  | 'operations___createdBy___children___id'
  | 'operations___createdBy___children___children'
  | 'operations___createdBy___internal___content'
  | 'operations___createdBy___internal___contentDigest'
  | 'operations___createdBy___internal___description'
  | 'operations___createdBy___internal___fieldOwners'
  | 'operations___createdBy___internal___ignoreType'
  | 'operations___createdBy___internal___mediaType'
  | 'operations___createdBy___internal___owner'
  | 'operations___createdBy___internal___type'
  | 'operations___updatedBy___remoteTypeName'
  | 'operations___updatedBy___remoteId'
  | 'operations___updatedBy___stage'
  | 'operations___updatedBy___createdAt'
  | 'operations___updatedBy___updatedAt'
  | 'operations___updatedBy___publishedAt'
  | 'operations___updatedBy___name'
  | 'operations___updatedBy___picture'
  | 'operations___updatedBy___isActive'
  | 'operations___updatedBy___kind'
  | 'operations___updatedBy___id'
  | 'operations___updatedBy___parent___id'
  | 'operations___updatedBy___parent___children'
  | 'operations___updatedBy___children'
  | 'operations___updatedBy___children___id'
  | 'operations___updatedBy___children___children'
  | 'operations___updatedBy___internal___content'
  | 'operations___updatedBy___internal___contentDigest'
  | 'operations___updatedBy___internal___description'
  | 'operations___updatedBy___internal___fieldOwners'
  | 'operations___updatedBy___internal___ignoreType'
  | 'operations___updatedBy___internal___mediaType'
  | 'operations___updatedBy___internal___owner'
  | 'operations___updatedBy___internal___type'
  | 'operations___publishedBy___remoteTypeName'
  | 'operations___publishedBy___remoteId'
  | 'operations___publishedBy___stage'
  | 'operations___publishedBy___createdAt'
  | 'operations___publishedBy___updatedAt'
  | 'operations___publishedBy___publishedAt'
  | 'operations___publishedBy___name'
  | 'operations___publishedBy___picture'
  | 'operations___publishedBy___isActive'
  | 'operations___publishedBy___kind'
  | 'operations___publishedBy___id'
  | 'operations___publishedBy___parent___id'
  | 'operations___publishedBy___parent___children'
  | 'operations___publishedBy___children'
  | 'operations___publishedBy___children___id'
  | 'operations___publishedBy___children___children'
  | 'operations___publishedBy___internal___content'
  | 'operations___publishedBy___internal___contentDigest'
  | 'operations___publishedBy___internal___description'
  | 'operations___publishedBy___internal___fieldOwners'
  | 'operations___publishedBy___internal___ignoreType'
  | 'operations___publishedBy___internal___mediaType'
  | 'operations___publishedBy___internal___owner'
  | 'operations___publishedBy___internal___type'
  | 'operations___release___remoteTypeName'
  | 'operations___release___remoteId'
  | 'operations___release___stage'
  | 'operations___release___createdAt'
  | 'operations___release___updatedAt'
  | 'operations___release___publishedAt'
  | 'operations___release___title'
  | 'operations___release___description'
  | 'operations___release___errorMessage'
  | 'operations___release___isActive'
  | 'operations___release___isImplicit'
  | 'operations___release___releaseAt'
  | 'operations___release___createdBy___remoteTypeName'
  | 'operations___release___createdBy___remoteId'
  | 'operations___release___createdBy___stage'
  | 'operations___release___createdBy___createdAt'
  | 'operations___release___createdBy___updatedAt'
  | 'operations___release___createdBy___publishedAt'
  | 'operations___release___createdBy___name'
  | 'operations___release___createdBy___picture'
  | 'operations___release___createdBy___isActive'
  | 'operations___release___createdBy___kind'
  | 'operations___release___createdBy___id'
  | 'operations___release___createdBy___children'
  | 'operations___release___updatedBy___remoteTypeName'
  | 'operations___release___updatedBy___remoteId'
  | 'operations___release___updatedBy___stage'
  | 'operations___release___updatedBy___createdAt'
  | 'operations___release___updatedBy___updatedAt'
  | 'operations___release___updatedBy___publishedAt'
  | 'operations___release___updatedBy___name'
  | 'operations___release___updatedBy___picture'
  | 'operations___release___updatedBy___isActive'
  | 'operations___release___updatedBy___kind'
  | 'operations___release___updatedBy___id'
  | 'operations___release___updatedBy___children'
  | 'operations___release___publishedBy___remoteTypeName'
  | 'operations___release___publishedBy___remoteId'
  | 'operations___release___publishedBy___stage'
  | 'operations___release___publishedBy___createdAt'
  | 'operations___release___publishedBy___updatedAt'
  | 'operations___release___publishedBy___publishedAt'
  | 'operations___release___publishedBy___name'
  | 'operations___release___publishedBy___picture'
  | 'operations___release___publishedBy___isActive'
  | 'operations___release___publishedBy___kind'
  | 'operations___release___publishedBy___id'
  | 'operations___release___publishedBy___children'
  | 'operations___release___operations'
  | 'operations___release___operations___remoteTypeName'
  | 'operations___release___operations___remoteId'
  | 'operations___release___operations___stage'
  | 'operations___release___operations___createdAt'
  | 'operations___release___operations___updatedAt'
  | 'operations___release___operations___publishedAt'
  | 'operations___release___operations___description'
  | 'operations___release___operations___errorMessage'
  | 'operations___release___operations___rawPayload'
  | 'operations___release___operations___status'
  | 'operations___release___operations___id'
  | 'operations___release___operations___children'
  | 'operations___release___status'
  | 'operations___release___id'
  | 'operations___release___parent___id'
  | 'operations___release___parent___children'
  | 'operations___release___children'
  | 'operations___release___children___id'
  | 'operations___release___children___children'
  | 'operations___release___internal___content'
  | 'operations___release___internal___contentDigest'
  | 'operations___release___internal___description'
  | 'operations___release___internal___fieldOwners'
  | 'operations___release___internal___ignoreType'
  | 'operations___release___internal___mediaType'
  | 'operations___release___internal___owner'
  | 'operations___release___internal___type'
  | 'operations___status'
  | 'operations___id'
  | 'operations___parent___id'
  | 'operations___parent___parent___id'
  | 'operations___parent___parent___children'
  | 'operations___parent___children'
  | 'operations___parent___children___id'
  | 'operations___parent___children___children'
  | 'operations___parent___internal___content'
  | 'operations___parent___internal___contentDigest'
  | 'operations___parent___internal___description'
  | 'operations___parent___internal___fieldOwners'
  | 'operations___parent___internal___ignoreType'
  | 'operations___parent___internal___mediaType'
  | 'operations___parent___internal___owner'
  | 'operations___parent___internal___type'
  | 'operations___children'
  | 'operations___children___id'
  | 'operations___children___parent___id'
  | 'operations___children___parent___children'
  | 'operations___children___children'
  | 'operations___children___children___id'
  | 'operations___children___children___children'
  | 'operations___children___internal___content'
  | 'operations___children___internal___contentDigest'
  | 'operations___children___internal___description'
  | 'operations___children___internal___fieldOwners'
  | 'operations___children___internal___ignoreType'
  | 'operations___children___internal___mediaType'
  | 'operations___children___internal___owner'
  | 'operations___children___internal___type'
  | 'operations___internal___content'
  | 'operations___internal___contentDigest'
  | 'operations___internal___description'
  | 'operations___internal___fieldOwners'
  | 'operations___internal___ignoreType'
  | 'operations___internal___mediaType'
  | 'operations___internal___owner'
  | 'operations___internal___type'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_ScheduledReleaseGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_ScheduledReleaseGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_LocationFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  latitude?: InputMaybe<FloatQueryOperatorInput>;
  longitude?: InputMaybe<FloatQueryOperatorInput>;
};

export type GraphCms_ShopTypeQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ShopType>;
  ne?: InputMaybe<GraphCms_ShopType>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ShopType>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ShopType>>>;
};

export type GraphCms_CountryQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Country>;
  ne?: InputMaybe<GraphCms_Country>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Country>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Country>>>;
};

export type GraphCms_ShopConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ShopEdge>;
  nodes: Array<GraphCms_Shop>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ShopGroupConnection>;
};


export type GraphCms_ShopConnectionDistinctArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopConnectionMaxArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopConnectionMinArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopConnectionSumArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ShopFieldsEnum;
};

export type GraphCms_ShopEdge = {
  next?: Maybe<GraphCms_Shop>;
  node: GraphCms_Shop;
  previous?: Maybe<GraphCms_Shop>;
};

export type GraphCms_ShopFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'slug'
  | 'url'
  | 'description'
  | 'city'
  | 'neighbourhood'
  | 'zip'
  | 'address'
  | 'location___remoteTypeName'
  | 'location___latitude'
  | 'location___longitude'
  | 'online'
  | 'hasOfflineStore'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'type'
  | 'country'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___description'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_ShopGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ShopEdge>;
  nodes: Array<GraphCms_Shop>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ShopGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_ShopGroupConnectionDistinctArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopGroupConnectionMaxArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopGroupConnectionMinArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopGroupConnectionSumArgs = {
  field: GraphCms_ShopFieldsEnum;
};


export type GraphCms_ShopGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ShopFieldsEnum;
};

export type GraphCms_ShopFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  city?: InputMaybe<StringQueryOperatorInput>;
  neighbourhood?: InputMaybe<StringQueryOperatorInput>;
  zip?: InputMaybe<IntQueryOperatorInput>;
  address?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<GraphCms_LocationFilterInput>;
  online?: InputMaybe<BooleanQueryOperatorInput>;
  hasOfflineStore?: InputMaybe<BooleanQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  type?: InputMaybe<GraphCms_ShopTypeQueryOperatorInput>;
  country?: InputMaybe<GraphCms_CountryQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ShopSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ShopFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_TipConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_TipEdge>;
  nodes: Array<GraphCms_Tip>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_TipGroupConnection>;
};


export type GraphCms_TipConnectionDistinctArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipConnectionMaxArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipConnectionMinArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipConnectionSumArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_TipFieldsEnum;
};

export type GraphCms_TipEdge = {
  next?: Maybe<GraphCms_Tip>;
  node: GraphCms_Tip;
  previous?: Maybe<GraphCms_Tip>;
};

export type GraphCms_TipFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'content'
  | 'ingredient'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___createdAt'
  | 'createdBy___updatedAt'
  | 'createdBy___publishedAt'
  | 'createdBy___name'
  | 'createdBy___picture'
  | 'createdBy___isActive'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___createdAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___publishedAt'
  | 'updatedBy___name'
  | 'updatedBy___picture'
  | 'updatedBy___isActive'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___createdAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___publishedAt'
  | 'publishedBy___name'
  | 'publishedBy___picture'
  | 'publishedBy___isActive'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'tags'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___description'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_TipGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_TipEdge>;
  nodes: Array<GraphCms_Tip>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_TipGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_TipGroupConnectionDistinctArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipGroupConnectionMaxArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipGroupConnectionMinArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipGroupConnectionSumArgs = {
  field: GraphCms_TipFieldsEnum;
};


export type GraphCms_TipGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_TipFieldsEnum;
};

export type GraphCms_TipFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  ingredient?: InputMaybe<StringQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  tags?: InputMaybe<GraphCms_TagQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_TipSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_TipFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type RecipeMetaFragment = { artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> };

export type AllIngredientsFragment = { slug: string, ingredients: Array<{ name: string, minAmount?: string | null, maxAmount?: string | null, unit?: string | null, modifier?: string | null }> };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { allGraphCmsRecipe: { nodes: Array<{ artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> }> } };

export type RecipesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesPageQuery = { allGraphCmsRecipe: { nodes: Array<{ artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> }> } };

export type ShopsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopsPageQuery = { allGraphCmsShop: { nodes: Array<{ address?: string | null, city?: string | null, country?: GraphCms_Country | null, descriptionMdx: string, name: string, neighbourhood?: string | null, url?: string | null, zip?: number | null }> } };

export type CuisinePageQueryVariables = Exact<{
  cuisine: GraphCms_Cuisine;
}>;


export type CuisinePageQuery = { allGraphCmsRecipe: { nodes: Array<{ artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> }> } };

export type FlagPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FlagPageQuery = { allGraphCmsRecipe: { nodes: Array<{ artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> }> } };

export type RecipePageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type RecipePageQuery = { graphCmsRecipe?: { artemsFavorite: boolean, cuisines: Array<GraphCms_Cuisine>, description?: string | null, descriptionMdx: string, ingredients?: string | null, ingredientsMdx: string, margaritasFavorite: boolean, notesMdx: string, overnight: boolean, preconditions: Array<string>, slug: string, sourceMdx: string, stepsMdx: string, tags: Array<GraphCms_Tag>, time?: number | null, title: string, tips: Array<string>, toolsMdx: string, warnings: Array<string>, yields?: string | null, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ url: string, handle: string, width?: number | null, height?: number | null }>, subrecipes: Array<{ slug: string, title: string, ingredientsMdx: string, stepsMdx: string, allIngredients: Array<{ slug: string, ingredients: Array<{ name: string, minAmount?: string | null, maxAmount?: string | null, unit?: string | null, modifier?: string | null }> }> }>, allIngredients: Array<{ slug: string, ingredients: Array<{ name: string, minAmount?: string | null, maxAmount?: string | null, unit?: string | null, modifier?: string | null }> }>, allIngredientsInfo: Array<{ name: string, kind: number, hasGluten: boolean, hasDairy: boolean, hasSugar: boolean, seasons: Array<number> }> } | null };

export type TagsPageQueryVariables = Exact<{
  tag: GraphCms_Tag;
}>;


export type TagsPageQuery = { allGraphCmsRecipe: { nodes: Array<{ artemsFavorite: boolean, createdAt: any, cuisines: Array<GraphCms_Cuisine>, margaritasFavorite: boolean, overnight: boolean, seasons: Array<number>, slug: string, time?: number | null, title: string, tags: Array<GraphCms_Tag>, allIngredients: Array<{ ingredients: Array<{ name: string }> }>, flags: { vegan: boolean, vegetarian: boolean, glutenFree: boolean, lowGluten: boolean, dairyFree: boolean, noAddedSugar: boolean }, images: Array<{ handle: string, height?: number | null, url: string, width?: number | null }> }> } };

export type AllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecipesQuery = { allGraphCmsRecipe: { nodes: Array<{ cuisines: Array<GraphCms_Cuisine>, slug: string, tags: Array<GraphCms_Tag> }> } };
