import React, {Component} from "react";
class ReadContent extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.content}
            </article>
        );
    }
}
export default ReadContent;