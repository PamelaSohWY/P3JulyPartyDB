// import in caolan forms 
const forms = require("forms");
// create some shortcuts
const field= forms.fields; // issue with spelling 
const validators = forms.validators; //issue with spelling

var bootstrapField = function (name,object){
    if (!Array.isArray(object.widget.classes)) { object.widget.classes = []}

    if (object.widget.classes.indexOf('form-control')=== -1){
        object.widget.classes.push('form-control');
    }
    
    var validationclass = object.value && !object.error ? 'is-valid' : '';
    validationclass = object.error ? 'is-invalid' : validationclass;
    if (validationclass){
        object.widget.classes.push(validationclass)
    }

    var label = object.labelHTML(name);
    var error = object.error ? '<div class="invalid-feedback">' + object.error + '</div>': '';

    var widget = object.widget.toHTML(name, object);
    return '<div class = "form-group">' + label + widget + error + '</div>'

} //end of bootstrap field

//name, unit price, description, quantity in stock, quantity total, quantity left

// Create Product Form to define product 
const createProductForm = () => {
    return forms.create ({
        'name': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }),
        'unit_price': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 
        'description': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 
        'quantity_in_stock': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 
        'quantity_total': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 
        'quantity_left': field.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 

    })
}; //end of create product form

module.exports = { createProductForm, bootstrapField };