const greet = (name: string): string => {
    return `Hello, ${name}`;
};

type FormField<T> = {
    label: string;
    value: T;
    required: boolean;
};

type FormSchema<T extends Record<string, any>> = {
    [K in keyof T]: FormField<T[K]>;
};

type MyForm = FormSchema<{
    name: string;
    email: string;
    message: string;
}>;

type FormValues<T> = {
    
};

const form = {
    name: { label: "Name", value: "Simisola Omotoso", required: true},
    email: { label: "Email Address", value: "somotoso@outlook.com", required: false},
    message: { label: "Message", value: "", required: true}
}