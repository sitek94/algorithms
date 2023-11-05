class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """

        last_index = len(digits) - 1

        i = last_index
        has_carry = False

        while i == last_index or has_carry:
            
            if i == -1:
                digits.insert(0, 1)
                break
            
            current_digit = digits[i]
            new_digit = current_digit + 1
            
            if new_digit >= 10:
                has_carry = True
                digits[i] = new_digit - 10

            else:
                has_carry = False
                digits[i] = new_digit

            i -= 1
            
        return digits