import { makeApiUrl } from '@/main/factories/http/api-url-factory';
import { LoadSurveyResult } from '@/domain/usecases';
import { makeAuthorizeHttpClientDecorator } from '../../decorators';
import { RemoteLoadSurveyResult } from '@/data/usecases';

export const makeRemoteLoadSurveyResult = (id: string): LoadSurveyResult => {
  return new RemoteLoadSurveyResult(
    makeApiUrl(`/surveys/${id}/results`),
    makeAuthorizeHttpClientDecorator()
  );
};
