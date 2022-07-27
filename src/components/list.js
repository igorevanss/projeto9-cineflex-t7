import { useState, useEffect } from 'react';
import axios from 'axios';

export default function List() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		const requisition = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisition.then((response) => {
			setItems(response.data.items);
		});
	}, []);

	if(items === null) {
		return <img src="loading.gif" />;
	}

	return (
		<div className="movie">
      <img src={items} alt=""/>
    </div>
	);
}