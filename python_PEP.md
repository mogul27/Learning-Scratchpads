## Python Styling

#### Naming

##### Give modules (files) short lower case names like actorcritic
Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability. Python packages should also have short, all-lowercase names, although the use of underscores is discouraged.

Follow CapName for classes

#### Indentation

4 Spaces are preferred over tabs for identation

##### Function indenting
Both below ar correct (Avoid not indenting belo function call as difficult to distinguish)
# Aligned with opening delimiter.
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# Add 4 spaces (an extra level of indentation) to distinguish arguments from the rest.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
