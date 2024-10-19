import {Field, Form, Formik} from "formik"

export const SearchBar =({handleSearch})=>{
    return      (<div>
        <Formik 
        initialValues={{search:""}}
        onSubmit={
            (values, actions)=>{
                handleSearch(values.search)
                actions.resetForm()
        }}>
          <Form>
            <Field 
            type="text" 
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
     </div>)
}