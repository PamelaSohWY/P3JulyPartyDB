// import in caolan forms 
const forms = require("forms");
// create some shortcuts
const fields= forms.fields;
const validators = forms.validators;

var bootstrapField = function (name,object){
    if (!Array.isArray(object.widget.classes)) { object.widget.classes = [];}

    if (object.widget.classes.indexOf('form-control')=== -1){
        object.widget.classes.push('form-control');
    }
    
    var validationclass = object.value && !object.error ? 'is-valid' : '';
    validationclass = object.error ? 'is-invalid' : validationclass;
    if (validationclass){
        object.widget.classes.push(validationclass);
    }

    var label = object.labelHTML(name);
    var error = object.error ? '<div class="invalid-feedback">' + object.error + '</div>': '';

    var widget = object.widget.toHTML(name, object);
    return '<div class = "form-group>' + label + widget + error + '</div>'

} //end of bootstrap field

//name, unit price, description, quantity in stock, quantity total, quantity left

// Create Product Form to define product 
const createProductForm = () => {
    return forms.create ({
        'name': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }),
        'unit_price': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            },
            'validators':[validators.integer()]
        }), 
        'description': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            }
        }), 
        'quantity_in_stock': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            },
            'validators':[validators.integer()]
        }), 
        'quantity_total': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            },
            'validators':[validators.integer()]
        }), 
        'quantity_left': fields.string({
            required:true,
            errorAfterField:true,
            cssClasses:{
              label:['form-label']
            },
            'validators':[validators.integer()]
        }), 

    })
}; //end of create product form

module.exports = { createProductForm, bootstrapField };