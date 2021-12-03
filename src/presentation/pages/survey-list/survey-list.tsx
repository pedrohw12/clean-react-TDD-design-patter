import { AccessDeniedError } from '@/domain/errors';
import { LoadSurveyList } from '@/domain/usecases';
import { Footer, Header } from '@/presentation/components';
import { ApiContext } from '@/presentation/contexts';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { SurveyContext, SurveyListItem, Error } from './components';
import Styles from './item-styles.scss';

type Props = {
  loadSurveyList: LoadSurveyList;
};

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const history = useHistory();
  const { setCurrentAccount } = useContext(ApiContext);
  const [state, setState] = useState({
    surveys: [] as LoadSurveyList.Model[],
    error: '',
    reload: false
  });

  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then((surveys) => setState({ ...state, surveys }))
      .catch((error) => {
        if (error instanceof AccessDeniedError) {
          setCurrentAccount(undefined);
          history.replace('/login');
        } else {
          setState({ ...state, error });
        }
      });
  }, [state.reload]);

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <SurveyListItem />}
        </SurveyContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default SurveyList;
