import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import CourseList from './courses/CourseList';
import EditCourse from './courses/EditCourse';
import AddCourse from './courses/AddCourse';

import ListTopic from './topics/TopicList';
import AddTopic from './topics/AddTopic';
import EditTopic from './topics/EditTopic';

import QuisList from './quis/QuisList.js';
import AddQuis from './quis/AddQuis.js';
import EditQuis from './quis/EditQuis.js';

import QuesList from './question/QuesList.js';
import AddQues from './question/AddQues.js';
import EditQues from './question/EditQues.js';

import AnswerList from './answer/AnswerList.js';
import AddAnswer from './answer/AddAnswer.js';
import EditAnswer from './answer/EditAnswer.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseList/>}/>
        <Route path='/add' element={<AddCourse/>}/>
        <Route path='/edit/:id' element={<EditCourse/>}/> 

        <Route path='/:id/' element={<ListTopic/>}/>
        <Route path='/:id/add' element={<AddTopic/>}/>
        <Route path='/:id/edit/:idtopic' element={<EditTopic/>}/>

        <Route path='/:id/v/:idtopic' element={<QuisList/>}/>
        <Route path='/:id/v/:idtopic/add' element={<AddQuis/>}/>
        <Route path='/:id/v/:idtopic/edit/:idquis' element={<EditQuis/>}/>

        <Route path='/:id/v/:idtopic/v/:idquis' element={<QuesList/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/add' element={<AddQues/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/edit/:idques' element={<EditQues/>}/>

        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques' element={<AnswerList/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques/add' element={<AddAnswer/>}/>
        <Route path='/:id/v/:idtopic/v/:idquis/v/:idques/edit/:idch' element={<EditAnswer/>}/>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
