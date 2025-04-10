import { FormProvider as Form} from "react-hook-form";



export default function FormProvider  ({ children, onSubmit, style, methods , ...rest}) {  
    return (
        <Form {...methods}>
            <form data-testid="form" onSubmit={onSubmit} style={style} {...rest}>{children}</form>
        </Form>
    );
};