import React from 'react';
import FullInfoPathElement from './FullInfoPathElement';

const FullInfoPath = (props) => {

    let state = props.addPath;

    let fullDescrElements = state.fullDescriptions.map(f =>
        <FullInfoPathElement key={`1+${f.id}`} title={f.title} fullDescr={f.fullDescr} />)

    return <> {fullDescrElements} </>
}
export default FullInfoPath