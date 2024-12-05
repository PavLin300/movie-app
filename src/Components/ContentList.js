import ContentCard from "./ContentCard";
import "../styles/contentList.css";
function ContentList({ list }) {
	return (
		<div className='contentList'>
			{list &&
				list.map((listElem, index) => (
					<ContentCard {...listElem} key={listElem.id + index} />
				))}
		</div>
	);
}

export default ContentList;
