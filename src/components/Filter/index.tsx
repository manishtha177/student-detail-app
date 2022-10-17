import { ChangeEvent } from 'react';
import { useTranslation } from 'next-i18next';

import { Input } from '../common/Input';
import { CheckBox } from '../common/CheckBox';
import { STUDENT_CLASS } from '../../modals';
import { LOCALIZATION_FILE_NAME, CLASSES } from '../../constants';
import { useStudents } from '../../context';

import styles from './filter.module.css';

const FilterSection = () => {
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);
  
  const { filters, updateFilter } = useStudents();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    if(updateFilter) {
      updateFilter(name, value);
    }
  };

  const onCheckBoxChange = (value: STUDENT_CLASS) => {
    const exists = filters.selectedClasses.includes(value);

    if (exists) {
      const selectedClasses = filters.selectedClasses.filter(cls => cls !== value);
      
      if(updateFilter) {
        updateFilter('selectedClasses', selectedClasses);
      }
      return;
    }

    if(updateFilter) {
      updateFilter('selectedClasses', [...filters.selectedClasses, value]);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterScoreWrapper}>
        <div>
          <h4 className={styles.filterClassLabel}>{t("SCORE")}</h4>
          <span className={styles.filterLabel}>{t("FROM")}</span>
          <Input
            type="number"
            value={filters.from}
            name="from"
            handleOnChange={onInputChange}
            className={styles.filterInput}
          />
          <span>{t("TO")}</span>
          <Input
            type="number"
            value={filters.to}
            name="to"
            handleOnChange={onInputChange}
            className={styles.filterInput}
          />
        </div>
        <div>
          <h4 className={styles.filterClassLabel}>{t("CLASS")}</h4>
          <div className={styles.filterCheckboxWrapper}>
            {CLASSES.map((_class, index) => (
              <CheckBox
                key={_class}
                isChecked={filters.selectedClasses.includes(_class)}
                label={_class}
                handleCheckBoxClick={() =>
                  onCheckBoxChange(_class)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
