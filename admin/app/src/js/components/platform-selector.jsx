import React from 'react';
import {Button} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import classNames from 'classnames';

export default ({selectPlatform, platform}) => {
	return (
		<Button.Group>
			<Button
				onClick={ () => selectPlatform('apple') }
				className={ classNames({positive: platform === 'apple'} ) }
			>
				<Icon name="apple" />
			</Button>
			<Button.Or />
			<Button
				onClick={ () => selectPlatform('android') }
				className={ classNames({positive: platform === 'android'} ) }
			>
				<Icon name="android" />
			</Button>
		</Button.Group>
	);
};
