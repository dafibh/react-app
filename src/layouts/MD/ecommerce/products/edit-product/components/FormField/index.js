// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// MD React components
import MDInput from "components/MDBase/MDInput";
import MDBox from "components/MDBase/MDBox";

function FormField({ label, ...rest }) {
  return (
    <MDBox mb={2}>
      <MDInput {...rest} variant="standard" label={label} fullWidth />
    </MDBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
