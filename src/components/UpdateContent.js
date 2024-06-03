import React, {Component} from "react";
class UpdateContent extends Component {
    render() {
        return (
            <article>
                <h2>UpdateContent</h2>
                <form action={'/create_process'} method={'post'}
                      onSubmit={(e)=>{
                          e.preventDefault();
                          this.props.onSubmit(
                              e.target.title.value,
                              e.target.desc.value);
                      }}>
                    <p>
                        <input type={"text"} name={"title"} placeholder={"title"}/>
                    </p>
                    <p>
                        <textarea name={'desc'} placeholder={'description'}>

                        </textarea>
                    </p>
                    <p>
                        <input type={"submit"}/>
                    </p>
                </form>
            </article>
        );
    }
}
export default UpdateContent;