import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-ui/themes/base/all.css';

function Search() {
    const [formData, setFormData] = useState({
        where: 'Where',
        date: '',
        guest: 'Guest'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '../api/search_api.php',
            data: formData,
            success: function (response) {
                displaySearchResults(response);
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    };

    const handleDatepicker = () => {
        $('#date').datepicker('show');
    };

    React.useEffect(() => {
        $("#date").datepicker({
            dateFormat: 'yy/mm/dd',
        });
    }, []);

    return (
        <form id="searchForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <select id="where" className="form-control" name="where" value={formData.where} onChange={handleChange}>
                        <option value="Where" selected>Where</option>
                        <option value="Northern Viet Nam">Northern Viet Nam</option>
                        <option value="Central Viet Nam">Central Viet Nam</option>
                        <option value="Southern Viet Nam">Southern Viet Nam</option>
                        <option value="Westside Viet Nam">Westside Viet Nam</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <div className="input-group date text-dark datepicker" id="datepicker">
                        <input type="text" className="form-control text-dark" placeholder="Date" name="date" id="date" aria-label="Date" aria-describedby="calendar-icon" value={formData.date} onChange={handleChange} />
                        <span className="input-group-append" onClick={handleDatepicker}>
                            <span className="input-group-text text-dark" id="calendar-icon">
                                <i className="fa fa-calendar"></i>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <select id="guest" className="form-control" name="guest" value={formData.guest} onChange={handleChange}>
                        <option value="Guest" selected>Guest</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="More">More</option>
                    </select>
                </div>
                <div className="form-group col-md-1 align-self-end">
                    <button type="submit" className="btn btn-success">Search</button>
                </div>
            </div>
        </form>
    );
}

export default Search;
