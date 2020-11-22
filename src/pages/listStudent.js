import React, { Component } from 'react'

export class listStudent extends Component {
    studentList = []
    list = []
    constructor(){
        super()
        this.state = {
            nationalitySelected: '',
            studentListByNationality: [],
            asc: false
        };
        this.studentList = [
            {
                id: 1,
                firstName: 'Wajdi',
                lastName: 'Makhlouf',
                age: 27,
                nationality: 'Tunisian'
            },
            {
                id: 2,
                firstName: 'Seif',
                lastName: 'Belaid',
                age: 30,
                nationality: 'Tunisian'
            },
            {
                id: 3,
                firstName: 'Mohsen',
                lastName: 'Marzouk',
                age: 57,
                nationality: 'Italian'
            },
            {
                id: 4,
                firstName: 'Walid',
                lastName: 'Makhlouf',
                age: 27,
                nationality: 'Tunisian'
            },
            {
                id: 5,
                firstName: 'Achref',
                lastName: 'Belaid',
                age: 30,
                nationality: 'Tunisian'
            },
            {
                id: 6,
                firstName: 'neymar',
                lastName: 'Marzouk',
                age: 57,
                nationality: 'Italian'
            }
        ];
        this.list = this.studentList.map(s => s.nationality);
        this.list = [... new Set(this.list)];
       
        this.initialize()
        
    }
    initialize = () =>{ 
        this.state.nationalitySelected = this.studentList[this.studentList.length - 1].nationality
        this.state.studentListByNationality = this.studentList.filter(s => s.nationality === this.state.nationalitySelected)
        this.setState((state) => state)

    }
    changeNationality = (e) => {
        this.state.nationalitySelected = e.target.value
        this.state.studentListByNationality = this.studentList.filter(s => s.nationality === e.target.value)
        this.setState((state) => state)
    }
    sortList = () =>{
        if(this.state.asc == false){
            this.state.studentListByNationality.sort((a,b) => this.sort(a,b))
            this.state.asc = true
        }else{
            this.state.studentListByNationality.sort((a,b) => this.sort(b,a))
            this.state.asc = false
        }
        
        this.setState((state) => state)
        
    }
    sort = (a,b) => {
        if(a.firstName < b.firstName){
            return -1
        }else{
            return 1
        }
    }
    render() {
        return (
            <div className="list-container">
                <div className="container">
                    <div className="row">
                        <select name="nationality" id="" value={this.state.nationalitySelected} onChange={this.changeNationality} >
                        {this.list.map(n => (<option key={n} value={n}>{n}</option>))}
                        
                        </select>
                    </div>
                    <div className="row">
                        <div className="list">
                            {this.state.studentListByNationality.map(s => (
                                <div className="userData" key={s.id}>
                                    {s.firstName} {s.lastName} ({s.age})
                                </div>
                            ))}
                            
                        </div>
                    </div>   
                    <div className="row">
                        <div className="button-container">
                            <button className="sort-button" onClick={this.sortList} >Sort</button>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default listStudent
