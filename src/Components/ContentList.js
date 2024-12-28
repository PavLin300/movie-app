import ContentCard from "./ContentCard";
import "../styles/contentList.css";
function ContentList({ list }) {
	return (
		<div className='row gap-3 justify-content-center'>
			{list &&
				list.map((listElem, index) => (
					<ContentCard {...listElem} key={listElem.id + index} />
				))}
		</div>
	);
}

export default ContentList;
