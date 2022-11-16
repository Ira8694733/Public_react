import React, {FC} from 'react';
import Select from 'react-select'
import {Control, Controller} from "react-hook-form"
import {ISimpleForm} from "./index"

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ICustomSelectProps {
    name: keyof ISimpleForm
    control: Control<ISimpleForm>
}

interface Ioption {
    value: string
    label: string
}

const CustomSelect: FC<ICustomSelectProps> = ({control, name}) => {

    const options: Ioption[] = [
        { value: 'Kiev', label: 'Kiev' },
        { value: 'London', label: 'London' },
        { value: 'Berlin', label: 'Berlin' }
    ]

    return (
        <Controller
            control={control}
            name={name}
            rules={
                {
                    required: 'Select is required'
                }
            }
            render={
            ({field: {value, onChange, onBlur}, fieldState: {error}})=> (
              <>
                <Select
                    options={options}
                    placeholder={'Select one...'}
                    value={options.find(el => el.value === value)} // через find нашли нам нужный эл.; проерили наш value через options
                    // @ts-ignore
                    onChange={({newvalue}) => onChange(newvalue?.value)} // чтобы выводился obj.
                    onBlur={onBlur}
                />
                  {
                      // error?.message && <Form.Text
                      // className="text-danger">{error?.message}</Form.Text>
                      error?.message && <Form.Text className="text-danger">{error?.message}</Form.Text>

                  }
              </>
            )
        }/>
        // есть props options, который принимает в себя массив объектов
        // у которого обязательно должен быть ключ value и ключ label
    )
};

export default CustomSelect;