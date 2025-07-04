// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';

/** addQuestionBankQuestion POST /api/questionBankquestion/add */
export async function addQuestionBankQuestionUsingPost(
  body: API.QuestionBankQuestionAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/questionBankquestion/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchAddQuestionToBank POST /api/questionBankquestion/add/bath */
export async function batchAddQuestionToBankUsingPost(
  body: API.QuestionBankQuestionBatchAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/questionBankquestion/add/bath', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestionBankQuestion POST /api/questionBankquestion/delete */
export async function deleteQuestionBankQuestionUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/questionBankquestion/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionBankQuestionVOById GET /api/questionBankquestion/get/vo */
export async function getQuestionBankQuestionVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionBankQuestionVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionBankQuestionVO_>('/api/questionBankquestion/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionBankQuestionByPage POST /api/questionBankquestion/list/page */
export async function listQuestionBankQuestionByPageUsingPost(
  body: API.QuestionBankQuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionBankQuestion_>('/api/questionBankquestion/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionBankQuestionVOByPage POST /api/questionBankquestion/list/page/vo */
export async function listQuestionBankQuestionVoByPageUsingPost(
  body: API.QuestionBankQuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionBankQuestionVO_>(
    '/api/questionBankquestion/list/page/vo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** listMyQuestionBankQuestionVOByPage POST /api/questionBankquestion/my/list/page/vo */
export async function listMyQuestionBankQuestionVoByPageUsingPost(
  body: API.QuestionBankQuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionBankQuestionVO_>(
    '/api/questionBankquestion/my/list/page/vo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** removeQuestionBankQuestion POST /api/questionBankquestion/remove */
export async function removeQuestionBankQuestionUsingPost(
  body: API.QuestionBankQuestionRemoveRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/questionBankquestion/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchRemoveQuestionToBank POST /api/questionBankquestion/remove/bath */
export async function batchRemoveQuestionToBankUsingPost(
  body: API.QuestionBankQuestionBatchRemoveRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/questionBankquestion/remove/bath', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateQuestionBankQuestion POST /api/questionBankquestion/update */
export async function updateQuestionBankQuestionUsingPost(
  body: API.QuestionBankQuestionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/questionBankquestion/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
