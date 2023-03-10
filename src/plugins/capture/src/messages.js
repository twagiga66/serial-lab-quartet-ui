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

const defaultLocaleMsg = {
  capture: {
    rulesTopNav: "Rules",
    tasksTopNav: "Tasks",
    addRule: "Add a New Rule",
    editRule: "Edit Existing Rule",
    addStep: "Add a New Step",
    editStepParam: "Edit Step Parameter",
    editStep: "Edit Step",
    addTask: "Create a New Task",
    deleteStep: "Delete Step",
    deleteStepConfirm: "Are you sure you want to delete this step?",
    deleteRule: "Delete Rule",
    deleteRuleConfirm: "Are you sure you want to delete this rule?",
    uploadFile: "File Upload",
    uploadFileTitle: "{ruleName} File Upload",
    createTask: "Create Task with File",
    uploadedFile: "File uploaded for rule {ruleName}",
    addRuleParam: "Add a New Rule Parameter",
    addStepParam: "Add a New Step Parameter",
    processFileError:
      "An error occurred while processing this file. Please check the QU4RTET server for more information. {error}",
    errorFetchRuleParams:
      "An error occurred while retrieving parameters for this rule. Please check the QU4RTET server for more information.",
    ruleParameters: "Rule Parameters",
    stepParameters: "Step Parameters",
    addRuleParameter: "Add Rule Parameter",
    editRuleParam: "Edit Rule Parameter",
    noRuleFound: "No Capture module detected on server",
    steps: "Steps",
    taskCreated: "Task with id {taskID} has been created.",
    tasksTotal: "{tasksCount} tasks total.",
    selectRule: "Select a Rule",
    taskDetail: "Task Detail",
    restart: "Restart",
    confirmRestart: "Are you sure you want to restart this task?",
    confirmRestartBody:
      "Restarting this task will re-execute all of the logic for this rule.",
    executeTaskError:
    "An error occurred while attempting to re-execute this task: {error}"
  }
};

const french = {
  rulesTopNav: "R??gles",
  tasksTopNav: "T??ches",
  addRule: "Ajouter une nouvelle r??gle",
  editRule: "??diter r??gle",
  addStep: "Ajouter une nouvelle ??tape",
  editStep: "??diter ??tape",
  editStepParam: "??diter un param??tre d'??tape",
  addTask: "Cr??er une nouvelle t??che",
  deleteStep: "Supprimer une ??tape",
  deleteStepConfirm: "Etes-vous certain de vouloir supprimer cette ??tape ?",
  deleteRule: "Supprimer une r??gle",
  deleteRuleConfirm: "Etes-vous certain de vouloir supprimer cette r??gle ?",
  uploadFile: "Envoi de fichier",
  uploadFileTitle: "Envoi de fichier {ruleName}",
  createTask: "Cr??er une t??che avec fichier",
  uploadedFile: "Fichier envoy?? pour r??gle {ruleName}",
  addRuleParam: "Ajouter un nouveau param??tre de r??gle",
  addStepParam: "Ajouter un nouveau param??tre d'??tape",
  processFileError:
    "Une erreur est survenue lors du traitement de ce fichier. Veuillez v??rifier le serveur QU4RTET pour plus d'informations.",
  errorFetchRuleParams:
    "Une erreur s'est produite lors de la r??cup??ration des param??tres pour cette r??gle. Veuillez v??rifier le serveur QU4RTET pour plus d'informations.",
  ruleParameters: "Param??tres de r??gle",
  addRuleParameter: "Ajouter un param??tre de r??gle",
  editRuleParam: "Editer un param??tre de r??gle",
  noRuleFound: "Module de capture non d??tect?? sur ce serveur.",
  taskCreated: "Une t??che avec l'ID {taskID} a ??t?? cr????e.",
  tasksTotal: "Total des t??ches: {tasksCount}",
  steps: "??tapes",
  selectRule: "S??lectionner une r??gle",
  restart: "Recommencer"
};

export default {
  "en-US": {plugins: {...defaultLocaleMsg}},
  "fr-FR": {
    plugins: {
      capture: {
        ...defaultLocaleMsg.Capture,
        ...french
      }
    }
  }
};
