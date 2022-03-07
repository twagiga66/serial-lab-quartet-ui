// Copyright (c) 2018 SerialLab Corp.
//
// GNU GENERAL PUBLIC LICENSE
//    Version 3, 29 June 2007
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import {Card} from "@blueprintjs/core";
import {RightPanel} from "components/layouts/Panels";
import {releaseNotes as rN} from './../releseNotesData.json';
// import logo from './icon.png';
import "./server-details.css";
class releaseNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <RightPanel title={<FormattedMessage id="app.servers.releaseNotes" />}>
              <div className="large-cards-container">
                <Card className="pt-elevation-4 form-card">
                    <h5>
                        <FormattedMessage id="plugins.capture.releaseNotes" />
                    </h5>
                    {rN.map((note, index) => (
                        <div className="form-card pt-elevation-4 zero-padding" key={index}>
                           <h4>{note.versionNumber}, {note.varsionName}</h4>
                           <ul>
                                {note.releaseNotesDescriptionsFeature.map((feature, index) => (
                                    <li key={index} className="release-list-style" >
                                      <g className="pt-icon-arrow-right" /> 
                                       <FormattedMessage 
                                      id={`app.dashboard.releaseNotesDescriptionsFeature.${note.versionNumber}.${feature}`} 
                                      /> 
                                    </li>
                                ))}
                           </ul>
                           <img src='./icon.png' alt='qu4rtet'/>
                        </div>
                    ))}
                </Card>
              </div>
      </RightPanel>
    );
  }
}

export default releaseNotes;
