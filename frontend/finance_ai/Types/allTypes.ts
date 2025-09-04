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

export interface CategoryType{
    id?: string;
    name: string;
    type: string;
    icon?: string;
}

export interface ProgressbarType{
    position: number;
    color: string;
}

export type ModalHandlerType = (value: boolean) => void;
