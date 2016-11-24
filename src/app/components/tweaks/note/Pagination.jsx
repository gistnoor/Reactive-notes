import React from 'react';
import ReactPaginate from 'react-paginate';


export default class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNum: 0,
            offset: 0,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }


    loadNotesFromList() {
        const notes = this.props.notes;
        const totalnotes = notes.length;
        const pageLimit = this.props.perPage;
        const pageNumber = Math.ceil(totalNotes / pageLimit);
        this.setState({
            pageNum: pageNumber,
            offset: 0
        });
    }

    componentDidMount() {
        this.loadNotesFromList();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
    
        this.setState({offset: offset}, () => {
            this.loadNotesFromList();
        });
    };

    render() {
        return (
            
            
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageNum={this.state.pageNum}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                clickCallback={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />

        );
    }
};

