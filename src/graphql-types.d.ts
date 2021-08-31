export type Maybe<T> = T | null;
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
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Scalars['String']>;
};

export type FlagsJson = {
  vegan: Scalars['Boolean'];
  vegetarian: Scalars['Boolean'];
  gluten: Scalars['Boolean'];
  dairy: Scalars['Boolean'];
  addedSugar: Scalars['Boolean'];
};

export type IngredientJson = {
  name: Scalars['String'];
  minAmount?: Maybe<Scalars['String']>;
  maxAmount?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  modifier?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type IngredientInfoJson = {
  name: Scalars['String'];
  kind: Scalars['Int'];
  hasGluten: Scalars['Boolean'];
  hasDairy: Scalars['Boolean'];
  hasSugar: Scalars['Boolean'];
  seasons: Array<Scalars['Int']>;
};

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
  url: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
};


export type GraphCms_AssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<GraphCmsImagePlaceholder>;
};


export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  allIngredients: Array<IngredientJson>;
  allIngredientsInfo: Array<IngredientInfoJson>;
  flags: FlagsJson;
  seasons: Array<Scalars['Int']>;
  preconditions: Array<Scalars['String']>;
  warnings: Array<Scalars['String']>;
  descriptionMdx: Scalars['String'];
  ingredientsMdx: Scalars['String'];
  notesMdx: Scalars['String'];
  sourceMdx: Scalars['String'];
  stepsMdx: Scalars['String'];
  toolsMdx: Scalars['String'];
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  descriptionMdx: Scalars['String'];
  storageMdx: Scalars['String'];
};

export type GraphCms_Cuisine =
  | 'Italian'
  | 'Russian'
  | 'Mexican'
  | 'Vietnamese'
  | 'Japanese'
  | 'Chinese';

export type GraphCms_Tag =
  | 'Soup'
  | 'Lunch'
  | 'Salad'
  | 'Foundation'
  | 'Snack'
  | 'SweetBread'
  | 'Picknick'
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
  | 'Icing';

export type GraphCms_Difficulty =
  | 'Easy'
  | 'Medium'
  | 'Hardcore';

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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  descriptionMdx: Scalars['String'];
};

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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  endpoint?: Maybe<Scalars['String']>;
  fragmentsPath?: Maybe<Scalars['String']>;
  buildMarkdownNodes?: Maybe<Scalars['Boolean']>;
  downloadLocalImages?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  stages?: Maybe<Array<Maybe<Scalars['String']>>>;
  typePrefix?: Maybe<Scalars['String']>;
  concurrency?: Maybe<Scalars['Int']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  codegenDelay?: Maybe<Scalars['Int']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  siteUrl?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  allowLocal?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsHeaders = {
  _fonts__?: Maybe<Array<Maybe<Scalars['String']>>>;
  _images__?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  allGraphCmsAsset: GraphCms_AssetConnection;
  graphCmsUser?: Maybe<GraphCms_User>;
  allGraphCmsUser: GraphCms_UserConnection;
  graphCmsRecipe?: Maybe<GraphCms_Recipe>;
  allGraphCmsRecipe: GraphCms_RecipeConnection;
  graphCmsIngredient?: Maybe<GraphCms_Ingredient>;
  allGraphCmsIngredient: GraphCms_IngredientConnection;
  graphCmsShop?: Maybe<GraphCms_Shop>;
  allGraphCmsShop: GraphCms_ShopConnection;
  graphCmsTip?: Maybe<GraphCms_Tip>;
  allGraphCmsTip: GraphCms_TipConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsAssetArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  imagesRecipe?: Maybe<GraphCms_RecipeFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsAssetArgs = {
  filter?: Maybe<GraphCms_AssetFilterInput>;
  sort?: Maybe<GraphCms_AssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsUserArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  picture?: Maybe<StringQueryOperatorInput>;
  isActive?: Maybe<BooleanQueryOperatorInput>;
  kind?: Maybe<GraphCms_UserKindQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsUserArgs = {
  filter?: Maybe<GraphCms_UserFilterInput>;
  sort?: Maybe<GraphCms_UserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsRecipeArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tools?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  yields?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<IntQueryOperatorInput>;
  overnight?: Maybe<BooleanQueryOperatorInput>;
  margaritasFavorite?: Maybe<BooleanQueryOperatorInput>;
  artemsFavorite?: Maybe<BooleanQueryOperatorInput>;
  ingredients?: Maybe<StringQueryOperatorInput>;
  steps?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  leftovers?: Maybe<StringQueryOperatorInput>;
  privateNotes?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  images?: Maybe<GraphCms_AssetFilterListInput>;
  subrecipes?: Maybe<GraphCms_RecipeFilterListInput>;
  recipes?: Maybe<GraphCms_RecipeFilterInput>;
  cuisines?: Maybe<GraphCms_CuisineQueryOperatorInput>;
  tags?: Maybe<GraphCms_TagQueryOperatorInput>;
  difficulty?: Maybe<GraphCms_DifficultyQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsRecipeArgs = {
  filter?: Maybe<GraphCms_RecipeFilterInput>;
  sort?: Maybe<GraphCms_RecipeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsIngredientArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  storage?: Maybe<StringQueryOperatorInput>;
  warnings?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsIngredientArgs = {
  filter?: Maybe<GraphCms_IngredientFilterInput>;
  sort?: Maybe<GraphCms_IngredientSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsShopArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  neighbourhood?: Maybe<StringQueryOperatorInput>;
  zip?: Maybe<IntQueryOperatorInput>;
  address?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<GraphCms_LocationFilterInput>;
  online?: Maybe<BooleanQueryOperatorInput>;
  hasOfflineStore?: Maybe<BooleanQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  type?: Maybe<GraphCms_ShopTypeQueryOperatorInput>;
  country?: Maybe<GraphCms_CountryQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsShopArgs = {
  filter?: Maybe<GraphCms_ShopFilterInput>;
  sort?: Maybe<GraphCms_ShopSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsTipArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  ingredient?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  tags?: Maybe<GraphCms_TagQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsTipArgs = {
  filter?: Maybe<GraphCms_TipFilterInput>;
  sort?: Maybe<GraphCms_TipSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  cuisine?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  fragmentsPath?: Maybe<StringQueryOperatorInput>;
  buildMarkdownNodes?: Maybe<BooleanQueryOperatorInput>;
  downloadLocalImages?: Maybe<BooleanQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  stages?: Maybe<StringQueryOperatorInput>;
  typePrefix?: Maybe<StringQueryOperatorInput>;
  concurrency?: Maybe<IntQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  allowLocal?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _fonts__?: Maybe<StringQueryOperatorInput>;
  _images__?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___tag'
  | 'context___cuisine'
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
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___endpoint'
  | 'pluginCreator___pluginOptions___fragmentsPath'
  | 'pluginCreator___pluginOptions___buildMarkdownNodes'
  | 'pluginCreator___pluginOptions___downloadLocalImages'
  | 'pluginCreator___pluginOptions___locales'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___typePrefix'
  | 'pluginCreator___pluginOptions___concurrency'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___codegenDelay'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___headers____fonts__'
  | 'pluginCreator___pluginOptions___headers____images__'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___code'
  | 'pluginCreator___pluginOptions___allowLocal'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: Maybe<GraphCms_Locale>;
  ne?: Maybe<GraphCms_Locale>;
  in?: Maybe<Array<Maybe<GraphCms_Locale>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Locale>>>;
};

export type GraphCms_StageQueryOperatorInput = {
  eq?: Maybe<GraphCms_Stage>;
  ne?: Maybe<GraphCms_Stage>;
  in?: Maybe<Array<Maybe<GraphCms_Stage>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Stage>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type GraphCms_UserFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  picture?: Maybe<StringQueryOperatorInput>;
  isActive?: Maybe<BooleanQueryOperatorInput>;
  kind?: Maybe<GraphCms_UserKindQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: Maybe<GraphCms_UserKind>;
  ne?: Maybe<GraphCms_UserKind>;
  in?: Maybe<Array<Maybe<GraphCms_UserKind>>>;
  nin?: Maybe<Array<Maybe<GraphCms_UserKind>>>;
};

export type GraphCms_RecipeFilterListInput = {
  elemMatch?: Maybe<GraphCms_RecipeFilterInput>;
};

export type GraphCms_RecipeFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tools?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  yields?: Maybe<StringQueryOperatorInput>;
  time?: Maybe<IntQueryOperatorInput>;
  overnight?: Maybe<BooleanQueryOperatorInput>;
  margaritasFavorite?: Maybe<BooleanQueryOperatorInput>;
  artemsFavorite?: Maybe<BooleanQueryOperatorInput>;
  ingredients?: Maybe<StringQueryOperatorInput>;
  steps?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  leftovers?: Maybe<StringQueryOperatorInput>;
  privateNotes?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  images?: Maybe<GraphCms_AssetFilterListInput>;
  subrecipes?: Maybe<GraphCms_RecipeFilterListInput>;
  recipes?: Maybe<GraphCms_RecipeFilterInput>;
  cuisines?: Maybe<GraphCms_CuisineQueryOperatorInput>;
  tags?: Maybe<GraphCms_TagQueryOperatorInput>;
  difficulty?: Maybe<GraphCms_DifficultyQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_AssetFilterListInput = {
  elemMatch?: Maybe<GraphCms_AssetFilterInput>;
};

export type GraphCms_AssetFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  imagesRecipe?: Maybe<GraphCms_RecipeFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_CuisineQueryOperatorInput = {
  eq?: Maybe<GraphCms_Cuisine>;
  ne?: Maybe<GraphCms_Cuisine>;
  in?: Maybe<Array<Maybe<GraphCms_Cuisine>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Cuisine>>>;
};

export type GraphCms_TagQueryOperatorInput = {
  eq?: Maybe<GraphCms_Tag>;
  ne?: Maybe<GraphCms_Tag>;
  in?: Maybe<Array<Maybe<GraphCms_Tag>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Tag>>>;
};

export type GraphCms_DifficultyQueryOperatorInput = {
  eq?: Maybe<GraphCms_Difficulty>;
  ne?: Maybe<GraphCms_Difficulty>;
  in?: Maybe<Array<Maybe<GraphCms_Difficulty>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Difficulty>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'imagesRecipe___images___imagesRecipe___id'
  | 'imagesRecipe___images___imagesRecipe___children'
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
  | 'imagesRecipe___subrecipes___recipes___id'
  | 'imagesRecipe___subrecipes___recipes___children'
  | 'imagesRecipe___subrecipes___cuisines'
  | 'imagesRecipe___subrecipes___tags'
  | 'imagesRecipe___subrecipes___difficulty'
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
  | 'imagesRecipe___recipes___recipes___id'
  | 'imagesRecipe___recipes___recipes___children'
  | 'imagesRecipe___recipes___cuisines'
  | 'imagesRecipe___recipes___tags'
  | 'imagesRecipe___recipes___difficulty'
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_AssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_UserSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_UserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'images___imagesRecipe___recipes___id'
  | 'images___imagesRecipe___recipes___children'
  | 'images___imagesRecipe___cuisines'
  | 'images___imagesRecipe___tags'
  | 'images___imagesRecipe___difficulty'
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
  | 'subrecipes___images___imagesRecipe___id'
  | 'subrecipes___images___imagesRecipe___children'
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
  | 'subrecipes___subrecipes___recipes___id'
  | 'subrecipes___subrecipes___recipes___children'
  | 'subrecipes___subrecipes___cuisines'
  | 'subrecipes___subrecipes___tags'
  | 'subrecipes___subrecipes___difficulty'
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
  | 'subrecipes___recipes___recipes___id'
  | 'subrecipes___recipes___recipes___children'
  | 'subrecipes___recipes___cuisines'
  | 'subrecipes___recipes___tags'
  | 'subrecipes___recipes___difficulty'
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
  | 'recipes___images___imagesRecipe___id'
  | 'recipes___images___imagesRecipe___children'
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
  | 'recipes___subrecipes___recipes___id'
  | 'recipes___subrecipes___recipes___children'
  | 'recipes___subrecipes___cuisines'
  | 'recipes___subrecipes___tags'
  | 'recipes___subrecipes___difficulty'
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
  | 'recipes___recipes___recipes___id'
  | 'recipes___recipes___recipes___children'
  | 'recipes___recipes___cuisines'
  | 'recipes___recipes___tags'
  | 'recipes___recipes___difficulty'
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_RecipeSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_RecipeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_IngredientFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  storage?: Maybe<StringQueryOperatorInput>;
  warnings?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_IngredientSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_IngredientFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_LocationFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  latitude?: Maybe<FloatQueryOperatorInput>;
  longitude?: Maybe<FloatQueryOperatorInput>;
};

export type GraphCms_ShopTypeQueryOperatorInput = {
  eq?: Maybe<GraphCms_ShopType>;
  ne?: Maybe<GraphCms_ShopType>;
  in?: Maybe<Array<Maybe<GraphCms_ShopType>>>;
  nin?: Maybe<Array<Maybe<GraphCms_ShopType>>>;
};

export type GraphCms_CountryQueryOperatorInput = {
  eq?: Maybe<GraphCms_Country>;
  ne?: Maybe<GraphCms_Country>;
  in?: Maybe<Array<Maybe<GraphCms_Country>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Country>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_ShopFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  neighbourhood?: Maybe<StringQueryOperatorInput>;
  zip?: Maybe<IntQueryOperatorInput>;
  address?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<GraphCms_LocationFilterInput>;
  online?: Maybe<BooleanQueryOperatorInput>;
  hasOfflineStore?: Maybe<BooleanQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  type?: Maybe<GraphCms_ShopTypeQueryOperatorInput>;
  country?: Maybe<GraphCms_CountryQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_ShopSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_ShopFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_TipFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  ingredient?: Maybe<StringQueryOperatorInput>;
  createdBy?: Maybe<GraphCms_UserFilterInput>;
  updatedBy?: Maybe<GraphCms_UserFilterInput>;
  publishedBy?: Maybe<GraphCms_UserFilterInput>;
  tags?: Maybe<GraphCms_TagQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_TipSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_TipFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
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
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___endpoint'
  | 'pluginOptions___fragmentsPath'
  | 'pluginOptions___buildMarkdownNodes'
  | 'pluginOptions___downloadLocalImages'
  | 'pluginOptions___locales'
  | 'pluginOptions___stages'
  | 'pluginOptions___typePrefix'
  | 'pluginOptions___concurrency'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___codegenDelay'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___headers____fonts__'
  | 'pluginOptions___headers____images__'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___code'
  | 'pluginOptions___allowLocal'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
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
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type RecipeMetaFragment = (
  Pick<GraphCms_Recipe, 'margaritasFavorite' | 'artemsFavorite' | 'time' | 'title' | 'seasons' | 'slug'>
  & { flags: Pick<FlagsJson, 'vegan' | 'vegetarian' | 'gluten' | 'dairy' | 'addedSugar'>, images: Array<Pick<GraphCms_Asset, 'handle' | 'height' | 'url' | 'width'>> }
);

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { allGraphCmsRecipe: { nodes: Array<RecipeMetaFragment> } };

export type RecipesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesPageQuery = { allGraphCmsRecipe: { nodes: Array<RecipeMetaFragment> } };

export type ShopsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopsPageQuery = { allGraphCmsShop: { nodes: Array<Pick<GraphCms_Shop, 'address' | 'city' | 'country' | 'descriptionMdx' | 'name' | 'neighbourhood' | 'url' | 'zip'>> } };

export type CuisinePageQueryVariables = Exact<{
  cuisine: GraphCms_Cuisine;
}>;


export type CuisinePageQuery = { allGraphCmsRecipe: { nodes: Array<RecipeMetaFragment> } };

export type RecipePageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type RecipePageQuery = { graphCmsRecipe?: Maybe<(
    Pick<GraphCms_Recipe, 'artemsFavorite' | 'cuisines' | 'description' | 'descriptionMdx' | 'ingredients' | 'ingredientsMdx' | 'margaritasFavorite' | 'notesMdx' | 'overnight' | 'preconditions' | 'sourceMdx' | 'stepsMdx' | 'tags' | 'time' | 'title' | 'toolsMdx' | 'warnings' | 'yields'>
    & { flags: Pick<FlagsJson, 'vegan' | 'vegetarian' | 'gluten' | 'dairy' | 'addedSugar'>, images: Array<Pick<GraphCms_Asset, 'url' | 'handle' | 'width' | 'height'>>, subrecipes: Array<Pick<GraphCms_Recipe, 'slug' | 'ingredientsMdx' | 'stepsMdx'>>, allIngredients: Array<Pick<IngredientJson, 'name' | 'minAmount' | 'maxAmount' | 'unit'>>, allIngredientsInfo: Array<Pick<IngredientInfoJson, 'name' | 'kind' | 'hasGluten' | 'hasDairy' | 'hasSugar' | 'seasons'>> }
  )> };

export type TagsPageQueryVariables = Exact<{
  tag: GraphCms_Tag;
}>;


export type TagsPageQuery = { allGraphCmsRecipe: { nodes: Array<RecipeMetaFragment> } };

export type AllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecipesQuery = { allGraphCmsRecipe: { nodes: Array<Pick<GraphCms_Recipe, 'cuisines' | 'slug' | 'tags'>> } };
