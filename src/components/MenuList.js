import React, {Component} from "react";
class MenuList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('==> TOC render shouldComponentUpdate'
            ,nextProps
            ,this.props.data
        );
        if(this.props.data === nextProps){
            return false;
        }
        return true;
    }

    render() {
        let lists = [];
        let data = this.props.data;
        let i=0
        while (i < data.length){
            lists.push(<li>
                <a
                    href={"/content/"+data[i].id}
                    data-id ={data[i].id}
                    onClick={
                        function (e) {
                               e.preventDefault();
                               this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)
                    }
                >{data[i].title}</a></li>);
            i= i+1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}
export default MenuList;