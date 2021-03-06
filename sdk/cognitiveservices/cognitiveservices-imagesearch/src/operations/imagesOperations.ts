/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/imagesOperationsMappers";
import * as Parameters from "../models/parameters";
import { ImageSearchClientContext } from "../imageSearchClientContext";

/** Class representing a ImagesOperations. */
export class ImagesOperations {
  private readonly client: ImageSearchClientContext;

  /**
   * Create a ImagesOperations.
   * @param {ImageSearchClientContext} client Reference to the service client.
   */
  constructor(client: ImageSearchClientContext) {
    this.client = client;
  }

  /**
   * @summary The Image Search API lets you send a search query to Bing and get back a list of
   * relevant images. This section provides technical details about the query parameters and headers
   * that you use to request images and the JSON response objects that contain them. For examples
   * that show how to make requests, see [Searching the Web for
   * Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesSearchResponse>
   */
  search(query: string, options?: Models.ImagesSearchOptionalParams): Promise<Models.ImagesSearchResponse>;
  /**
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param callback The callback
   */
  search(query: string, callback: msRest.ServiceCallback<Models.Images>): void;
  /**
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param options The optional parameters
   * @param callback The callback
   */
  search(query: string, options: Models.ImagesSearchOptionalParams, callback: msRest.ServiceCallback<Models.Images>): void;
  search(query: string, options?: Models.ImagesSearchOptionalParams | msRest.ServiceCallback<Models.Images>, callback?: msRest.ServiceCallback<Models.Images>): Promise<Models.ImagesSearchResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      searchOperationSpec,
      callback) as Promise<Models.ImagesSearchResponse>;
  }

  /**
   * @summary The Image Detail Search API lets you search on Bing and get back insights about an
   * image, such as webpages that include the image. This section provides technical details about
   * the query parameters and headers that you use to request insights of images and the JSON
   * response objects that contain them. For examples that show how to make requests, see [Searching
   * the Web for
   * Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesDetailsResponse>
   */
  details(query: string, options?: Models.ImagesDetailsOptionalParams): Promise<Models.ImagesDetailsResponse>;
  /**
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param callback The callback
   */
  details(query: string, callback: msRest.ServiceCallback<Models.ImageInsights>): void;
  /**
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)),
   * you should always include the user's query term. Use this parameter only with the Image Search
   * API.Do not specify this parameter when calling the Trending Images API.
   * @param options The optional parameters
   * @param callback The callback
   */
  details(query: string, options: Models.ImagesDetailsOptionalParams, callback: msRest.ServiceCallback<Models.ImageInsights>): void;
  details(query: string, options?: Models.ImagesDetailsOptionalParams | msRest.ServiceCallback<Models.ImageInsights>, callback?: msRest.ServiceCallback<Models.ImageInsights>): Promise<Models.ImagesDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        query,
        options
      },
      detailsOperationSpec,
      callback) as Promise<Models.ImagesDetailsResponse>;
  }

  /**
   * @summary The Image Trending Search API lets you search on Bing and get back a list of images
   * that are trending based on search requests made by others. The images are broken out into
   * different categories. For example, Popular People Searches. For a list of markets that support
   * trending images, see [Trending
   * Images](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/trending-images).
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesTrendingResponse>
   */
  trending(options?: Models.ImagesTrendingOptionalParams): Promise<Models.ImagesTrendingResponse>;
  /**
   * @param callback The callback
   */
  trending(callback: msRest.ServiceCallback<Models.TrendingImages>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  trending(options: Models.ImagesTrendingOptionalParams, callback: msRest.ServiceCallback<Models.TrendingImages>): void;
  trending(options?: Models.ImagesTrendingOptionalParams | msRest.ServiceCallback<Models.TrendingImages>, callback?: msRest.ServiceCallback<Models.TrendingImages>): Promise<Models.ImagesTrendingResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      trendingOperationSpec,
      callback) as Promise<Models.ImagesTrendingResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const searchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "images/search",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.aspect,
    Parameters.color,
    Parameters.countryCode,
    Parameters.count,
    Parameters.freshness,
    Parameters.height,
    Parameters.id,
    Parameters.imageContent,
    Parameters.imageType,
    Parameters.license,
    Parameters.market,
    Parameters.maxFileSize,
    Parameters.maxHeight,
    Parameters.maxWidth,
    Parameters.minFileSize,
    Parameters.minHeight,
    Parameters.minWidth,
    Parameters.offset,
    Parameters.query,
    Parameters.safeSearch,
    Parameters.size,
    Parameters.setLang,
    Parameters.width
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Images
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const detailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "images/details",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.cropBottom,
    Parameters.cropLeft,
    Parameters.cropRight,
    Parameters.cropTop,
    Parameters.cropType,
    Parameters.countryCode,
    Parameters.id,
    Parameters.imageUrl,
    Parameters.insightsToken,
    Parameters.modules,
    Parameters.market,
    Parameters.query,
    Parameters.safeSearch,
    Parameters.setLang
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.contentType,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageInsights
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const trendingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "images/trending",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.countryCode,
    Parameters.market,
    Parameters.safeSearch,
    Parameters.setLang
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TrendingImages
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
