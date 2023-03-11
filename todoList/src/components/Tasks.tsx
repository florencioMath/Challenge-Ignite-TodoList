import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './Tasks.module.css';
import { NoTasks } from './NoTasks';

export function Tasks() {
  const [taskChecked, setTaskChecked] = useState(false);
  const tasks = 1;
  const [teste, setTeste] = useState(0);

  function handleCheck(check: boolean) {
    setTaskChecked(check);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tasksNumbers}>
          <span className={styles.tasksCreated}>
            Tarefas Criadas <span className={styles.tasksCreatedAmount}>5</span>
          </span>
          <span className={styles.tasksDone}>
            Concluídas <span className={styles.tasksDoneAmount}>2 de 5</span>
          </span>
        </div>

        {teste > 0 ? (
          <div className={styles.wrapperIndividualTask}>
            <div className={styles.individualTask}>
              <Checkbox.Root
                checked={taskChecked}
                onCheckedChange={handleCheck}
                id='temporaly'
                className={
                  taskChecked
                    ? styles.checkboxChecked
                    : styles.checkboxUnchecked
                }
              >
                <div>
                  <Checkbox.Indicator>
                    <Check size={10} className={styles.checkIcon} />
                  </Checkbox.Indicator>
                </div>
              </Checkbox.Root>
              <label htmlFor='temporaly' className={styles.taskLabel}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus numquam fugit deleniti.
              </label>
              <button
                title='Excluir tarefa'
                className={styles.iconIndividualTask}
              >
                <Trash size={24} />
              </button>
            </div>
            <div className={styles.individualTask}>
              <Checkbox.Root
                checked={taskChecked}
                onCheckedChange={handleCheck}
                id='temporaly'
                className={
                  taskChecked
                    ? styles.checkboxChecked
                    : styles.checkboxUnchecked
                }
              >
                <div>
                  <Checkbox.Indicator>
                    <Check size={10} className={styles.checkIcon} />
                  </Checkbox.Indicator>
                </div>
              </Checkbox.Root>
              <label htmlFor='temporaly' className={styles.taskLabel}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus numquam fugit deleniti.
              </label>
              <button
                title='Excluir tarefa'
                className={styles.iconIndividualTask}
              >
                <Trash size={24} />
              </button>
            </div>
          </div>
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
}
