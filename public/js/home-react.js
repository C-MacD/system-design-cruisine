'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Added to cart.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Add to Cart'
        );
    }
}

const domContainer = document.querySelector('#addToCart');
ReactDOM.render(e(LikeButton), domContainer);