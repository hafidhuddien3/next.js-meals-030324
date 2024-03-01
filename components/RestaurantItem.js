import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
 
function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <div className="card"
    style={{
      //width: '100%', height: '100%', 
    //position: 'absolute'
  }}
    >
      <Image src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
      width={403}
      height={270}
      //fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      //layout='fill'
      //objectFit='contain'
 alt={name} />
 
      <div className="container">
        <h2><Link href={`/detail/${id}`}>{name}</Link></h2>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
}
 
RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
 
export default RestaurantItem;