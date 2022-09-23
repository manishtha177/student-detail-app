import { useTranslation } from "next-i18next";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ClassesFilter } from "../../constants";
import { Button } from "../common/Button";
import { CheckBox } from "../common/CheckBox";
import { Input } from "../common/Input";

import styles from "./filter.module.css";

interface FilterValueProps {
  from: number;
  to: number;
  classesSelected: string[];
}

interface FilterProps {
  filterValues: FilterValueProps;
  setFilterValues: Dispatch<SetStateAction<FilterValueProps>>;
  handleFilter: () => void;
}

const Filter = ({
  filterValues,
  setFilterValues,
  handleFilter,
}: FilterProps) => {
  const { t } = useTranslation("common");
  const [filterClass, setFilterClass] = useState(ClassesFilter);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterValues({ ...filterValues, [name]: value });
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
    setFilterValues({ ...filterValues, classesSelected: classesSelected });
  };

  return (
    <div className={styles.filterContainer}>
      <div>
        <span>{t("SCORE")}</span>
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
        <span>{t("CLASS")}</span>
        {filterClass.map((classFilter, index) => {
          return (
            <div key={index}>
              <CheckBox
                isChecked={classFilter.isChecked}
                label={classFilter.className}
                handleCheckBoxClick={() =>
                  onCheckBoxChange(classFilter.className)
                }
              />
            </div>
          );
        })}
      </div>
      <Button label={t("FILTER")} handleOnClick={handleFilter} />
    </div>
  );
};

export default Filter;
