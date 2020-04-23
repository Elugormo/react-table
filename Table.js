import React from 'react'
import './Table.css'


const Row = ({id, title, priority, type, complete, remove}) => {
    return(
        <div className="row">
            <div>{id}</div>
            <div>{title}</div>
            <div>{priority}</div>
            <div>{type}</div>
            <div>{complete}</div>
            <div className="remove"><a href="#" onClick={() => remove(id)}>X</a></div>
        </div>
    )
}

class TableInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
              {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
              {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
              {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
              ],
            }; 
    }

    remove = (rowID) => {
        const arrCopy = this.state.data.filter((item) => item.id !== rowID);
        this.setState({ data: arrCopy })
    }
    
    ascComp = (key) => {
        return function(a, b) {
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0
        }
    }

    descComp = (key) => {
        return function(a, b) {
            if(a[key] > b[key]) return -1;
            if(a[key] < b[key]) return 1;
            return 0
        }
    }


    sortBy = (key, flag) => {
        
        let arr = [...this.state.data];
        if(Number(flag) == 0) {
            arr.sort(this.ascComp(key));
            this.setState({
                data: arr
            })
            
        } else {
            arr.sort(this.descComp(key));
            this.setState({
                data: arr
            })
        }
    }

    render() {
        const entries = this.state.data.map((rowData) => <Row className="rTableRow" remove={this.remove} {...rowData}></Row>)
        return(
            <div className="table">
        <div className="header">
          <div id="0" onClick={(e) => this.sortBy('id', e.currentTarget.id)} >ID</div>
          <div id="0" onClick={(e) => this.sortBy('title', e.currentTarget.id)}>Title</div>
          <div id="0" onClick={(e) => this.sortBy('priority', e.currentTarget.id)}>Priority</div>
          <div id="0" onClick={(e) => this.sortBy('type', e.currentTarget.id)}>Issue Type</div>
          <div id="0" onClick={(e) => this.sortBy('complete', e.currentTarget.id)}>% Complete</div>
          <div className="remove">Action</div>
        </div>
        <div className="body">
          {entries}
        </div>
      </div>
        )
    }
        
    
}


export default TableInput