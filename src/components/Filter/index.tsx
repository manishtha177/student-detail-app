import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "next-i18next";

import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { CheckBox } from "../common/CheckBox";
import { FilterProps } from "../../modals/student";
import { ClassesFilter, LOCALIZATION_FILE_NAME } from "../../constants";

import styles from "./filter.module.css";

interface FilterComponentProps {
  filterValues: FilterProps;
  setFilterValues?: Dispatch<SetStateAction<FilterProps>>;
  handleFilter?: () => void;
}

const Filter = ({
  filterValues,
  setFilterValues,
  handleFilter,
}: FilterComponentProps) => {
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);
  const [filterClass, setFilterClass] = useState(ClassesFilter);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (setFilterValues) {
      setFilterValues({ ...filterValues, [name]: value });
    }
  };

  const onCheckBoxChange = (className: string) => {
    const filteredClasses = ClassesFilter.map((classFilered) => {
      if (classFilered.className === className) {
        classFilered.isChecked = !classFilered.isChecked;
      }
      return classFilered;
    });

    const classesSelected = filteredClasses
      .map((element) => element.isChecked && element.className)
      .filter((element) => element) as Array<string>;

    setFilterClass(filteredClasses);
    if (setFilterValues) {
      setFilterValues({ ...filterValues, classesSelected: classesSelected });
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
            value={filterValues.from}
            name="from"
            handleOnChange={onInputChange}
            className={styles.filterInput}
          />
          <span>{t("TO")}</span>
          <Input
            type="number"
            value={filterValues.to}
            name="to"
            handleOnChange={onInputChange}
            className={styles.filterInput}
          />
        </div>
        <div>
          <h4 className={styles.filterClassLabel}>{t("CLASS")}</h4>
          <div className={styles.filterCheckboxWrapper}>
            {filterClass.map((classFilter, index) => {
              return (
                <CheckBox
                  key={index}
                  isChecked={classFilter.isChecked}
                  label={classFilter.className}
                  handleCheckBoxClick={() =>
                    onCheckBoxChange(classFilter.className)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Button label={t("FILTER")} handleOnClick={handleFilter} />
      </div>
    </div>
  );
};

export default Filter;
