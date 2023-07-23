class Solution(object):
    def addBinary(self, num_a, num_b):
        """
        :type num_a: str
        :type num_b: str
        :rtype: str
        """
        result = ""
        i = 1
        carry = 0
        
        while i <= len(num_a) + 1 or i <= len(num_b) + 1:
            a = int(num_a[-i]) if i <= len(num_a) else 0
            b = int(num_b[-i]) if i <= len(num_b) else 0

            s = a + b + carry
            
            if s == 3:
                carry = 1
                result = "1" + result
            elif s == 2:
                carry = 1
                result = "0" + result
            elif s == 1:
                carry = 0
                result = "1" + result
            elif i <= len(num_a) or i <= len(num_b):
                carry = 0
                result = "0" + result

            i += 1

        return result

    


        

            

            




