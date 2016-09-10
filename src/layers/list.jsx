import React from 'react'
import Immutable from 'immutable'
import { Heading, Toolbar, NavItem, Space} from 'rebass'
import { LayerEditor } from './editor.jsx'
import scrollbars from '../scrollbars.scss'

// List of collapsible layer editors
export class LayerList extends React.Component {
	static propTypes = {
		layers: React.PropTypes.instanceOf(Immutable.List),
		onLayersChanged: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
	}

	onLayerDestroyed(deletedLayer) {
		//TODO: That's just horrible...
		let deleteIdx = -1

		for (let i = 0; i < this.props.layers.length; i++) {
			if(this.props.layers[i].id == deletedLayer.id) {
				deleteIdx = i
				break
			}
		}

		const remainingLayers = this.props.layers.slice(0)
		remainingLayers.splice(deleteIdx, 0)
		this.props.onLayersChanged(remainingLayers)
	}

	onLayerChanged(changedLayer) {
		//TODO: That's just horrible...
		let changeIdx = -1
		for (let entry of this.props.layers.entries()) {
			let [i, layer] = entry
			if(layer.get('id') == changedLayer.get('id')) {
				changeIdx = i
				break
			}
		}

		const changedLayers = this.props.layers.set(changeIdx, changedLayer)
		this.props.onLayersChanged(changedLayers)
	}

	render() {
		var layerPanels = []

		for(let layer of this.props.layers) {
			layerPanels.push(<LayerEditor
				key={layer.get('id')}
				layer={layer}
				onLayerDestroyed={this.onLayerDestroyed.bind(this)}
				onLayerChanged={this.onLayerChanged.bind(this)}
			/>)
		}

		return <div>
			<Toolbar style={{marginRight: 20}}>
				<NavItem>
					<Heading>Layers</Heading>
				</NavItem>
				<Space auto x={1} />
			</Toolbar>

			<div className={scrollbars.darkScrollbar} style={{
				overflowY: "scroll",
				bottom:0,
				left:0,
				right:0,
				top:40,
				position: "absolute",
			}}>
			{layerPanels}
			</div>
		</div>
	}
}
