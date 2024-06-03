import React,{ Component } from "react";
import Subject from "./components/Subject"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import MenuList from "./components/MenuList"
import Control from "./components/Controll"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id =3 ;
        this.state = {
            mode : 'welcome',
            selected_content_id : 2,
            welcome : {title : 'welcome',desc:'welcomcomcomcome'},
            subject: {title: 'WEB', subs: 'world wide web'},
            contents:[
                {id:1,title:'html',desc:'Html is hyperText'},
                {id:2,title:'css',desc:'css is...'},
                {id:3,title:'javascript',desc:'javascript'}
            ]
        }
    }
    getReadContent(){
        let i = 0;
        while (i<this.state.contents.length){
            let data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){
                return data;
                break;
            }
            i= i+1
        }
    }
    getContent(){
        let _title,_desc,_article,_contents = null;
        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc =  this.state.welcome.desc;
            _article = <ReadContent title={_title} content={_desc}></ReadContent>
        }else if (this.state.mode === 'read'){
            _contents = this.getReadContent();
            _article = <ReadContent title={_contents.title} content={_contents.desc}></ReadContent>
        }else if (this.state.mode === 'create'){
            _article = <CreateContent onSubmit={
                (_title,_desc)=>{
                    this.max_content_id = this.max_content_id +1 ;
                    //let _content = this.state.contents.concat({id : this.max_content_id,title : _title , desc : _desc})
                    let _content = Array.from(this.state.contents);
                    _content.push({id : this.max_content_id,title : _title , desc : _desc})
                    this.setState({
                        contents : _content,
                        mode :'read',
                        selected_content_id : this.max_content_id
                    });
                }
            }></CreateContent>
        }else if (this.state.mode === 'delete'){

        }
        else if (this.state.mode === 'update'){
            _contents = this.getReadContent();
            _article = <UpdateContent data={_contents} onSubmit={
                (_id,_title,_desc)=>{
                    let  _cont = Array.from(this.state.contents);
                    let i = 0 ;
                    while (i < _cont.length){
                        if(_cont[i].id === _id){
                            _cont[i] = {id:_id,title:_title,desc:_desc};
                            console.log(_cont[i]);
                            break;
                        }
                        i = i+1;
                    }
                    this.setState({
                        contents : _cont,
                        mode :'read'
                    });
                }
            }></UpdateContent>
        }

        return _article;
    }
  render() {
    return (
        <div className={"App"}>
            <Subject
                title={this.state.subject.title}
                sub={this.state.subject.subs}
                onChangePage = {function () {
                    this.setState({
                        mode : 'welcome',
                        selected_content_id: 0
                    });
                }.bind(this)}
            ></Subject>
            <MenuList
                onChangePage = {function (id) {
                        this.setState({
                            mode : 'read',
                            selected_content_id : Number(id)
                        });
                    }.bind(this)
                }
                data={this.state.contents}></MenuList>
            <Control onChangeMode={(mode) =>{
                if(mode === 'delete') {
                    if(window.confirm("삭제하시겠습니까?")) {
                        let _cont = Array.from(this.state.contents);
                        let i = 0 ;
                        while (i < _cont.length){
                            if(_cont[i].id == this.state.selected_content_id) {
                                _cont.splice(i,1);
                                break;
                            }
                            i = i+1;
                        }
                        this.setState({
                            contents : _cont,
                            mode: 'welcome'
                        });
                        alert("삭제되었습니다.");
                    }
                }else {
                    this.setState({
                        mode : mode
                    })
                }

            }}></Control>
            {this.getContent()}
        </div>
    );
  }
}
export default App;
