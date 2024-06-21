import React from 'react';

function SearchResults({ results }) {
    return (
        <div className="ketquatiemkiem">
            {results && Array.isArray(results) ? (
                results.map((result) => (
                    <div key={result.tourid} className="col-md-6 mb-4">
                        <div className="card text-bg-dark">
                            <img src={`../image/${result.image}`} className="card-img image pt" alt="image" />
                            <div className="card-img-overlay">
                                <div className="card-title text-right text-light mb-auto" style={{ fontSize: '15px', paddingBottom: '20%' }}>
                                    From {result.giatour}$
                                </div>
                                <div className="flex-column h-100 justify-content-center">
                                    <div className="text-center text-light">
                                        <p className="card-text mb-2 text-left" style={{ fontSize: '13px' }}>
                                            <i>{result.chitiet}</i>
                                        </p>
                                        <h5 className="card-title mb-3 text-center" style={{ fontSize: '30px' }}>
                                            <b>{result.tentour}</b>
                                        </h5>
                                        <div className="card-title text-left text-light" style={{ fontSize: '15px' }}>
                                            <i className="far fa-clock"></i> {result.duration} days
                                        </div>
                                        <div className="mt-3 text-center">
                                            <a href={`../chitiettour/chitiet.php?idbaidang=${result.tourid}`} className="btn btn-outline-primary border border-white text-dark custom-btn">
                                                More Information<i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No search results found.</p>
            )}
        </div>
    );
}

export default SearchResults;
