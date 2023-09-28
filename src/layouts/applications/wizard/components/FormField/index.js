// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// MD React components
import MDInput from "components/MDBase/MDInput";

function FormField({ label, ...rest }) {
  return <MDInput variant="standard" label={label} fullWidth {...rest} />;
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
