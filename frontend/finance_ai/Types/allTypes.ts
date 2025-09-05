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

/* export interface ButtonType{
    text: string;
    color: string;
    backgroundColor?: string;
    border?: string;
    borderColor?: string;
    width?: string;
    height?: string;
    paddingX?: string;
    paddingY?: string;
} 
*/

export interface EachAI_InsightType{
    bgColor: string;
    icon?: string;
    title: string;
    message: string;
}

export type ModalHandlerType = (value: boolean) => void;
