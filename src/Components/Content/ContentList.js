import ContentCard from "./ContentCard";
import "../../styles/content.css";
import "../../styles/media.css";

function ContentList({ list }) {
	return (
		<div className='row gap-3 justify-content-center'>
			{list &&
				list.map((listElem, index) => (
					<div
						key={index}
						className='col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center'
					>
						<ContentCard {...listElem} />
					</div>
				))}
		</div>
	);
}

export default ContentList;
