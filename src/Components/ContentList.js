import ContentCard from "./ContentCard";
import "../styles/contentList.css";
function ContentList({ list }) {
	return (
		<div className='row gap-3 justify-content-center'>
			{list &&
				list.map((listElem, index) => (
					<div className='col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center'>
						<ContentCard {...listElem} key={listElem.id + index} />
					</div>
				))}
		</div>
	);
}

export default ContentList;
