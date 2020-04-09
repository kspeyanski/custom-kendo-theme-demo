import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Form, Field } from '@progress/kendo-react-form';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

import "./kendo-theme-custom.scss";

const App = () => {
    const handleSubmit = (event) => {
        console.log(event);
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <form onSubmit={formRenderProps.onSubmit} className={'k-form k-form-inline'} style={{ width: 400 }}>
                    <fieldset className="k-fieldset">
                        <legend>Create a new account:</legend>
                        <Field name={'title'} component={DropDownList} label={'Title'} style={{ width: '100%' }} data={['Mr.', 'Mrs.', 'other']} />
                        <Field name={'firstName'} component={Input} label={'First name'} style={{ width: '100%' }} />
                        <Field name={'lastName'} component={Input} label={'Last name'} style={{ width: '100%' }} />
                        <Field name={"email"} type={"email"} component={Input} label={"Email"} validator={emailValidator} style={{ width: '100%' }} />
                        <Field name={"password"} type={"password"} component={Input} label={"Password"} style={{ width: '100%' }} />
                        <Field name={"birth-date"} type={"Birth Date"} component={DateInput} label={"Birth Date"} style={{ width: '100%' }} />
                        <Field name={'subscribe'} component={Checkbox} label={"Subscribe for newsletter"} style={{ width: '100%' }} defaultValue={true} />
                    </fieldset>
                    <Button onClick={formRenderProps.onFormReset} >
                        Clear
                        </Button>
                        &nbsp;
                    <Button
                        type={'submit'}
                        primary={true}
                        disabled={!formRenderProps.allowSubmit}
                        onClick={formRenderProps.onSubmit}
                    >
                        Submit
                        </Button>
                </form>
            )}
        />
    );
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");

export default App;