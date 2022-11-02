
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { useState } from 'react';
import { SortableItem } from './SortableItem';

function App() {
  const [languages, setLanguages] = useState(['Javascript', 'Python', 'Laravel PHP']);
  console.log(languages)
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >

      <Container className="p-3" style={{ "width": "50%" }} align="center">
        <h3>The Best Programming languages!</h3>

        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/*  we need components that use the useSortable  Hook*/}

          {languages?.map(language => <SortableItem key={language} id={language} />)}
        </SortableContext>
      </Container>

    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("test");
    const { active, over } = event;
    console.log("Active: " + active.id);
    console.log("Over: " + over.id);

    if (active.id !== over.id) {

      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });

    }
  }
} export default App;


