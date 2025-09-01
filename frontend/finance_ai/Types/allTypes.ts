export interface InsightDataType{
    title: string;
    data: string;
    remark: string;
    icon: string;
}

export interface IncomeVSExpensesType{
    week: string;
    income: number;
    expenses: number;
}

export interface ModalHandlerType{
    openModal?: () => void;
    /* closeModal?: (value: boolean) => void */
}
